"use client";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const ShorternForm = () => {
  const [url, setUrl] = React.useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Shorten URL", url);

    try {
      const response = await fetch("/api/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });
      await response.json();
      setUrl("");
    } catch (error) {
      console.error("Failed to shorten URL:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-4">
        <Input
          type="text"
          placeholder="Enter your URL here"
          className="border-muted-foreground/30 bg-primary hover:border-muted-foreground/50"
          onChange={(e) => setUrl(e.target.value)}
          value={url}
          required
        />
        <Button variant="secondary" className="btn-primary">
          Shorten
        </Button>
      </div>
    </form>
  );
};

export default ShorternForm;
