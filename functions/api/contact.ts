import { neon } from "@neondatabase/serverless";

export const onRequest: PagesFunction<{ DATABASE_URL: string }> = async (context) => {
  const { request, env } = context;
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  if (request.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (request.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405, headers: corsHeaders });
  }

  try {
    const body = await request.json();

    if (!body.name || (body.name as string).length < 2) {
      return Response.json({ error: "El nombre debe tener al menos 2 caracteres" }, { status: 400, headers: corsHeaders });
    }
    if (!body.email || !(body.email as string).includes("@")) {
      return Response.json({ error: "Email inválido" }, { status: 400, headers: corsHeaders });
    }
    if (!body.message || (body.message as string).length < 10) {
      return Response.json({ error: "El mensaje debe tener al menos 10 caracteres" }, { status: 400, headers: corsHeaders });
    }

    const sql = neon(env.DATABASE_URL);
    const result = await sql(
      "INSERT INTO portfolio.contact_messages (name, email, subject, message, source) VALUES ($1, $2, $3, $4, 'portfolio') RETURNING id",
      [body.name, body.email, body.subject || null, body.message]
    );

    return Response.json({ success: true, id: result[0]?.id }, {
      status: 201,
      headers: corsHeaders,
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json({ error: "Error interno del servidor" }, {
      status: 500,
      headers: corsHeaders,
    });
  }
};
