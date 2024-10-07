import prisma from "@/lib/db";
import { nanoid } from "nanoid";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { url } = await request.json();

  const shortUrl = nanoid(4);
  const shorternUrl = await prisma.url.create({
    data: {
      originalUrl: url,
      shortUrl,
    },
  })
 
  return NextResponse.json({ shortUrl: shorternUrl.shortUrl });
}
