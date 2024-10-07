import prisma from "@/lib/db";
import { redirect } from "next/navigation";
import { notFound } from "next/navigation";

interface RedirectPageProps {
  params: {
    shortUrl: string;
  };
}

export default async function RedirectPage({ params }: RedirectPageProps) {
  const { shortUrl } = params;

  const url = await prisma.url.findUnique({
    where: {
      shortUrl,
    },
  });

  if (!url) {
    notFound();
  }

  await prisma.url.update({
    where: {
      shortUrl,
    },
    data: {
      views: {
        increment: 1,
      },
    },
  });

  redirect(url.originalUrl);
}
