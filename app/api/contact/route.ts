import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validators";

type ContactMessage = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  topic: "Reservation request" | "Catering request" | "Menu/allergen question" | "Press/partnership" | "Other";
  message: string;
  createdAt: string;
};

const contactStore: ContactMessage[] = [];

function generateMessageId() {
  return `MSG-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid contact payload.",
          details: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    const payload = parsed.data;

    const entry: ContactMessage = {
      id: generateMessageId(),
      name: payload.name,
      email: payload.email,
      phone: payload.phone || undefined,
      topic: payload.topic,
      message: payload.message,
      createdAt: new Date().toISOString(),
    };

    contactStore.push(entry);

    console.log("[Mock Email] New contact message:", entry);

    return NextResponse.json(
      {
        success: true,
        message: "Message received. We'll reply within 1 business day (demo).",
        data: {
          id: entry.id,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/contact error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit message." },
      { status: 500 }
    );
  }
}
