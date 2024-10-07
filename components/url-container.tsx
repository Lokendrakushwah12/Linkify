"use client";
import React from "react";
import ShorternForm from "./shortern-from";
import UrlList from "./url-list";
import AnimationContainer from "./animation-container";

const UrlContainer = () => {
  const [refreshKey, setRefreshKey] = React.useState(0);

  const handleUrlCreated = () => {
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <div className="text-accent w-full h-full space-y-4 md:px-0 px-4">
      <AnimationContainer delay={0.1}>
        <ShorternForm handleUrlCreated={handleUrlCreated} />
      </AnimationContainer>
        <UrlList key={refreshKey} />
    </div>
  );
};

export default UrlContainer;
