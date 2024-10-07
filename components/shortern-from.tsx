import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const ShorternForm = () => {
  return (
    <form>
      <div className="flex flex-col space-y-2">
        <Input
          type="text"
          placeholder="Enter your URL here"
          className="border-muted-foreground"
        />
        <Button variant="secondary" className="btn-primary">
          Shorten
        </Button>
      </div>
    </form>
  );
};

export default ShorternForm;
