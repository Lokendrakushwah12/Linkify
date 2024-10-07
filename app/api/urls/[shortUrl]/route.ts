import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest, { params }: { params: { shortUrl: string } }) {
  const { shortUrl } = params;

  const existingUrl = await prisma.url.findUnique({
    where: {
      shortUrl,
    },
  });

  if (!existingUrl) {
    return NextResponse.json(
      { error: "URL not found" },
      { status: 404 } // Not Found
    );
  }

  await prisma.url.delete({
    where: {
      shortUrl,
    },
  });

  return NextResponse.json({ message: "URL deleted successfully" });
}
