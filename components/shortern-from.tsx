"use client";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const ShorternForm = () => {
  const [url, setUrl] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Shorten URL", url);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-4">
        <Input
          type="text"
          placeholder="Enter your URL here"
          className="border-muted-foreground"
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
