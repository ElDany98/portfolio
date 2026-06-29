import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(255),
  subject: z.string().max(200).optional(),
  message: z.string().min(10).max(2000),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      const errors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        if (issue.path[0]) {
          errors[issue.path[0] as string] = issue.message;
        }
      }
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    // TODO: Insert into Neon DB via Drizzle
    // const { db } = await import("@/lib/db");
    // const { contactMessages } = await import("@/lib/db/schema");
    // await db.insert(contactMessages).values({ ...parsed.data });

    return NextResponse.json({ success: true, id: "pending-db-integration" }, { status: 201 });
  } catch {
    return NextResponse.json(
      { success: false, errors: { _form: "Error interno del servidor" } },
      { status: 500 }
    );
  }
}
