"use client";
import { CheckIcon, CopyIcon, EyeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import MagicCard from "./ui/magic-card";

interface UrlListProps {
  id: string;
  shortUrl: string;
  originalUrl: string;
  views: number;
}

const UrlList = () => {
  const [urls, setUrls] = React.useState<UrlListProps[]>([]);
  const [isCopied, setIsCopied] = React.useState(false);
  const [copyUrl, setCopyUrl] = React.useState("");

  const fetchUrls = async () => {
    try {
      const response = await fetch("/api/urls");
      const data = await response.json();
      setUrls(data);
    } catch (error) {
      console.error("Failed to fetch URLs:", error);
    }
  };

  const handleCopy = (url: string) => {
    navigator.clipboard.writeText(url);
    setIsCopied(true);
    setCopyUrl(url);
    setTimeout(() => {
      setIsCopied(false);
      setCopyUrl("");
    }, 2000);
  };

  React.useEffect(() => {
    fetchUrls();
  }, []);
  return (
    <div>
      <h2 className="text-2xl font-[500] mb-2">Recently Added URLs</h2>
      <ul className="space-y-2">
        {urls.map((data, index) => (
          <MagicCard key={index}>
            <li
            //   key={data.id}
              className="flex bg-primary p-2 py-1 items-center w-full justify-between"
            >
              <Link href={`/${data.shortUrl}`} className="hover:underline">
                {process.env.NEXT_PUBLIC_BASE_URL}/{data.shortUrl}
              </Link>
              <div className="flex gap-2 items-center justify-center">
                <div className="flex gap-1 items-center justify-center">
                  <EyeIcon className="w-4 h-4 text-muted-foreground" />
                  <div className="text-muted-foreground mono">
                    {data.views} views
                  </div>
                </div>
                <Button
                  onClick={() =>
                    handleCopy(
                      `${process.env.NEXT_PUBLIC_BASE_URL}/${data.shortUrl}`
                    )
                  }
                  variant="ghost"
                  className="text-muted-foreground hover:text-muted-foreground hover:bg-accent/10"
                  size="icon"
                >
                  {isCopied &&
                  copyUrl ==
                    `${process.env.NEXT_PUBLIC_BASE_URL}/${data.shortUrl}` ? (
                    <CheckIcon className="w-4 h-4" />
                  ) : (
                    <CopyIcon className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </li>
          </MagicCard>
        ))}
      </ul>
    </div>
  );
};

export default UrlList;
