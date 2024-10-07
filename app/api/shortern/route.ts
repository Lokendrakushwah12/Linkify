import { nanoid } from "nanoid";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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
