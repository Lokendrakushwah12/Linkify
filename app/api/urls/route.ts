import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await prisma.url.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 5,
    });
    return NextResponse.json(response);
  } catch (error) {
    console.error("Failed to fetch URLs:", error);
    return NextResponse.json(
      { error: "Failed to fetch URLs" },
      { status: 500 }
    );
  }
}
