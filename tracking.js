(function() {
  const BOT_TOKEN = '8808829219:AAEIv5DagLe_TFxQxyV9iffvBVWHaDtg5YY';
  const API = `https://api.telegram.org/bot${BOT_TOKEN}`;
  const STORAGE_KEY = 'dm_tg_chat';

  let chatId = localStorage.getItem(STORAGE_KEY);
  let sessionStart = Date.now();
  let viewedSections = {};
  let activeSection = null;

  function log(...args) { console.log('[DM Track]', ...args); }

  async function resolveChatId() {
    if (chatId) return chatId;
    try {
      const res = await fetch(`${API}/getUpdates?limit=1&allowed_updates=message`);
      const data = await res.json();
      if (data.ok && data.result.length > 0) {
        const msg = data.result[data.result.length - 1].message;
        if (msg && msg.from) {
          chatId = msg.chat.id;
          localStorage.setItem(STORAGE_KEY, chatId);
          log('Chat ID resolved:', chatId);
          return chatId;
        }
      }
    } catch (e) { log('Error resolving chat ID:', e); }
    return null;
  }

  async function sendToTelegram(type, payload = {}) {
    const cid = await resolveChatId();
    if (!cid) {
      if (type === 'visit') {
        log('No chat ID yet. Send /start to the bot to enable tracking.');
      }
      return;
    }

    const now = new Date();
    const timeStr = now.toLocaleString('es-MX', { timeZone: 'America/Mexico_City' });

    let lines = [];
    switch (type) {
      case 'visit':
        lines = [
          `👤 <b>Nueva visita al Portafolio</b>`,
          `🕐 ${timeStr}`,
          `📍 ${payload.city || 'Desconocida'}, ${payload.country || ''}`,
          `💻 ${payload.os || '?'} · ${payload.browser || '?'}`,
          `📱 ${payload.device || 'Desktop'}`,
          `🔗 ${payload.referrer || 'Directo'}`,
          `🌐 ${payload.lang}`,
          `📐 ${payload.screen}`,
          `⏱ ${payload.tz}`
        ];
        break;

      case 'section':
        lines = [
          `📋 <b>Sección vista:</b> ${payload.section}`,
          `⏱ Duración: ${payload.duration}s`,
          `🕐 ${timeStr}`
        ];
        break;

      case 'click':
        lines = [
          `🖱 <b>Click:</b> ${payload.element}`,
          `📝 Texto: ${payload.text || '(sin texto)'}`,
          `🔗 ${payload.href || '(sin enlace)'}`,
          `📌 Sección: ${payload.section || '?'}`,
          `🕐 ${timeStr}`
        ];
        break;

      case 'contact':
        lines = [
          `📬 <b>Formulario de contacto enviado</b>`,
          `👤 Nombre: ${payload.name}`,
          `📧 Email: ${payload.email}`,
          `📌 Asunto: ${payload.subject || '(sin asunto)'}`,
          `🕐 ${timeStr}`
        ];
        break;

      case 'terminal':
        lines = [
          `💻 <b>Comando en terminal:</b> ${payload.command}`,
          `🕐 ${timeStr}`
        ];
        break;

      case 'leave':
        const totalSec = Math.floor((Date.now() - sessionStart) / 1000);
        const sectionsSummary = Object.entries(viewedSections)
          .map(([s, d]) => `• ${s}: ${Math.floor(d / 1000)}s`)
          .join('\n');
        lines = [
          `🚪 <b>Visitante se fue</b>`,
          `⏱ Sesión: ${Math.floor(totalSec / 60)}m ${totalSec % 60}s`,
          `📋 Secciones vistas:\n${sectionsSummary || '  (ninguna)'}`,
          `🕐 ${timeStr}`
        ];
        break;
    }

    try {
      await fetch(`${API}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: cid, text: lines.join('\n'), parse_mode: 'HTML' })
      });
    } catch (e) { log('Send error:', e); }
  }

  function getDeviceInfo() {
    const ua = navigator.userAgent;
    const os = /Windows/.test(ua) ? 'Windows' : /Mac/.test(ua) ? 'macOS' : /Linux/.test(ua) ? 'Linux' : /Android/.test(ua) ? 'Android' : /iOS/.test(ua) ? 'iOS' : '?';
    const browser = /Chrome/.test(ua) && !/Edg/.test(ua) ? 'Chrome' : /Firefox/.test(ua) ? 'Firefox' : /Safari/.test(ua) ? 'Safari' : /Edg/.test(ua) ? 'Edge' : '?';
    const device = /Mobile/.test(ua) ? 'Mobile' : /Tablet/.test(ua) ? 'Tablet' : 'Desktop';
    return { os, browser, device };
  }

  function getActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    let best = null, bestDist = Infinity;
    const mid = window.innerHeight / 2;
    sections.forEach(s => {
      const rect = s.getBoundingClientRect();
      const dist = Math.abs(rect.top - mid);
      if (dist < bestDist) { bestDist = dist; best = s; }
    });
    return best ? best.id || best.querySelector('[id]')?.id || 'unknown' : 'hero';
  }

  function getSectionName(id) {
    const map = { 'skills': 'Skills', 'badges': 'Badges', 'experience': 'Experience', 'projects': 'Projects', 'contact': 'Contact', 'top': 'Hero' };
    return map[id] || id;
  }

  async function initTracking() {
    const info = getDeviceInfo();

    let geo = { city: '?', country: '?' };
    try {
      const g = await(await fetch('https://ipapi.co/json/')).json();
      geo = { city: g.city || '?', country: g.country_name || '?' };
    } catch (e) {}

    sendToTelegram('visit', {
      ...info,
      screen: `${screen.width}x${screen.height}`,
      lang: navigator.language,
      tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
      referrer: document.referrer || 'Directo',
      ...geo
    });

    const sections = document.querySelectorAll('section[id]');
    const sectionObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = entry.target.id;
        const name = getSectionName(id);
        if (entry.isIntersecting) {
          viewedSections[id] = Date.now();
          sendToTelegram('section', { section: name, duration: 0 });
        } else if (viewedSections[id]) {
          const dur = Math.floor((Date.now() - viewedSections[id]) / 1000);
          if (dur > 2) {
            viewedSections[id + '_dur'] = dur;
          }
        }
      });
    }, { threshold: 0.4 });
    sections.forEach(s => sectionObs.observe(s));

    document.addEventListener('click', (e) => {
      const el = e.target.closest('a, button, [role="button"], input[type="submit"]');
      if (!el) return;
      const text = el.textContent?.trim().slice(0, 60);
      const href = el.tagName === 'A' ? el.href : null;
      const section = getActiveSection();
      const sectionName = getSectionName(section);
      sendToTelegram('click', { element: el.tagName, text, href, section: sectionName });
    });

    document.addEventListener('submit', (e) => {
      const form = e.target;
      if (form.querySelector('[name="name"]') && form.querySelector('[name="email"]')) {
        const name = form.querySelector('[name="name"]')?.value || '?';
        const email = form.querySelector('[name="email"]')?.value || '?';
        const subject = form.querySelector('[name="subject"]')?.value || '';
        sendToTelegram('contact', { name, email, subject });
      }
    });

    window.addEventListener('beforeunload', () => {
      sendToTelegram('leave', {});
    });

    log('Tracking initialized. Send /start to the bot to enable notifications.');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTracking);
  } else {
    initTracking();
  }
})();
