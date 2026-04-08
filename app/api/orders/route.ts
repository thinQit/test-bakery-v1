import { NextResponse } from "next/server";
import { createOrderSchema } from "@/lib/validators";

type OrderItem = {
  sku: string;
  quantity: number;
};

type StoredOrder = {
  orderId: string;
  fullName: string;
  phone: string;
  email: string;
  pickupDate: string;
  pickupTime: string;
  items: OrderItem[];
  slicing: boolean;
  notes?: string;
  estimatedReadyTime: string;
  createdAt: string;
};

const ordersStore: StoredOrder[] = [];

const PRICE_MAP: Record<string, number> = {
  "bread-country-sourdough": 9,
  "bread-olive-thyme": 11,
  "pastry-butter-croissant": 5.25,
  "pastry-almond-croissant": 6.5,
  "pastry-cinnamon-knot": 5.75,
  "cafe-latte": 5.5,
  "cafe-chai": 5.25,
};

function generateOrderId() {
  return `FF-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
}

function estimateReadyTime(pickupTime: string) {
  return pickupTime;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = createOrderSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid order payload.",
          details: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    const payload = parsed.data;

    const subtotal = payload.items.reduce((sum, item) => {
      const price = PRICE_MAP[item.sku] ?? 0;
      return sum + price * item.quantity;
    }, 0);

    const estimatedTax = Number((subtotal * 0.1).toFixed(2));
    const total = Number((subtotal + estimatedTax).toFixed(2));

    const orderId = generateOrderId();
    const estimatedReadyTime = estimateReadyTime(payload.pickupTime);

    const orderRecord: StoredOrder = {
      orderId,
      fullName: payload.fullName,
      phone: payload.phone,
      email: payload.email,
      pickupDate: payload.pickupDate,
      pickupTime: payload.pickupTime,
      items: payload.items,
      slicing: payload.slicing ?? false,
      notes: payload.notes,
      estimatedReadyTime,
      createdAt: new Date().toISOString(),
    };

    ordersStore.push(orderRecord);

    return NextResponse.json(
      {
        success: true,
        message: "Order received (demo). Pay in-store at pickup.",
        data: {
          orderId,
          estimatedReadyTime,
          subtotal: Number(subtotal.toFixed(2)),
          estimatedTax,
          total,
          queueSize: ordersStore.length,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/orders error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit order." },
      { status: 500 }
    );
  }
}
