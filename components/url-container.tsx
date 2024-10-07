import React from "react";
import ShorternForm from "./shortern-from";
import UrlList from "./url-list";
import AnimationContainer from "./animation-container";

const urlContainer = () => {
  return (
    <div className="text-accent space-y-4">
      <AnimationContainer delay={0.1}>
        <ShorternForm />
      </AnimationContainer>
      <AnimationContainer delay={0.2}>
        <UrlList />
      </AnimationContainer>
    </div>
  );
};

export default urlContainer;
