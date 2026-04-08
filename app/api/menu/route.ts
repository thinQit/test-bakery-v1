import { NextResponse } from "next/server";

const MENU_DATA = {
  categories: [
    {
      name: "Breads (Loaves)",
      items: [
        {
          sku: "bread-country-sourdough",
          name: "Country Sourdough",
          description: "Crackly crust, open crumb, 24-hour fermentation.",
          price: 9,
          dietary: ["vegetarian"],
        },
        {
          sku: "bread-olive-thyme",
          name: "Olive & Thyme Levain",
          description: "Castelvetrano olives, fresh thyme, sea salt finish.",
          price: 11,
          dietary: ["vegetarian"],
        },
        {
          sku: "bread-seeded-rye",
          name: "Seeded Rye",
          description: "Caraway, sunflower, flax; hearty and aromatic.",
          price: 10,
          dietary: ["vegetarian"],
        },
        {
          sku: "bread-milk-pullman",
          name: "Milk Bread Pullman",
          description: "Soft, sliceable, lightly sweet—perfect for toast.",
          price: 8,
          dietary: ["vegetarian"],
        },
      ],
    },
    {
      name: "Pastries",
      items: [
        {
          sku: "pastry-butter-croissant",
          name: "Butter Croissant",
          description: "72-hour lamination, cultured butter, shattering layers.",
          price: 5.25,
          dietary: ["vegetarian"],
        },
        {
          sku: "pastry-almond-croissant",
          name: "Almond Croissant",
          description: "House almond cream, toasted almonds, powdered sugar.",
          price: 6.5,
          dietary: ["vegetarian", "contains-nuts"],
        },
        {
          sku: "pastry-cinnamon-knot",
          name: "Cinnamon Knot",
          description: "Brown sugar, Ceylon cinnamon, vanilla glaze.",
          price: 5.75,
          dietary: ["vegetarian"],
        },
        {
          sku: "pastry-seasonal-galette",
          name: "Seasonal Fruit Galette Slice",
          description: "Flaky crust with rotating fruit (pear, berry, or stone fruit).",
          price: 6.75,
          dietary: ["vegetarian"],
        },
      ],
    },
    {
      name: "Café",
      items: [
        {
          sku: "cafe-latte",
          name: "Latte",
          description: "Stumptown espresso + steamed milk (oat available).",
          price: 5.5,
          dietary: ["vegetarian"],
        },
        {
          sku: "cafe-pour-over",
          name: "Pour-Over",
          description: "Single-origin rotation, brewed to order.",
          price: 4.75,
          dietary: ["vegan"],
        },
        {
          sku: "cafe-chai",
          name: "Chai (House-Spiced)",
          description: "Black tea, ginger, cardamom, clove; not too sweet.",
          price: 5.25,
          dietary: ["vegetarian"],
        },
        {
          sku: "savory-tomato-soup-toast",
          name: "Tomato Soup + Toast",
          description: "Roasted tomato soup with sourdough toast and olive oil.",
          price: 9.5,
          dietary: ["vegetarian"],
        },
      ],
    },
  ],
  weekendSpecial: {
    name: "Weekend Special: Pistachio Morning Bun",
    description: "Orange zest, pistachio sugar, browned butter glaze.",
    price: 6.75,
    available: "Sat–Sun, while supplies last",
  },
};

export async function GET() {
  try {
    return NextResponse.json(
      {
        success: true,
        data: MENU_DATA,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("GET /api/menu error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch menu." },
      { status: 500 }
    );
  }
}
