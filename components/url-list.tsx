import { CopyIcon, Eye, EyeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const UrlList = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Recently Added URLs</h2>
      <ul className="space-y-2">
        {[...Array(5)].map((_, i) => (
          <li className="flex bg-primary p-2 py-1 rounded-lg items-center w-full justify-between">
            <Link href="http://localhost:3000/" className="hover:underline">
              http://localhost:3000/
            </Link>
            <div className="flex gap-2 items-center justify-center">
              <div className="flex gap-1 items-center justify-center">
                <EyeIcon className="w-4 h-4 text-muted-foreground" />
                <div className="text-muted-foreground">5 views</div>
              </div>
              <Button
                variant="ghost"
                className="text-muted-foreground hover:text-muted-foreground hover:bg-accent/10"
                size="icon"
              >
                <CopyIcon className="w-4 h-4" />
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UrlList;
