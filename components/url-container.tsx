import React from "react";
import ShorternForm from "./shortern-from";
import UrlList from "./url-list";

const urlContainer = () => {
  return (
    <div className="text-accent">
      <ShorternForm />
      <UrlList />
    </div>
  );
};

export default urlContainer;
