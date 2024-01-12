import React from "react";
import MyComponent from './MyComponent';

const UnderReview = () => {
  return (
    <div className="grid gap-10">
      <div className="flex">
        <div className="w-5 h-5 rounded-l-lg mr-2"></div>
        Under Review
      </div>
      <div>
        <MyComponent></MyComponent>
      </div>
    </div>
  );
};

export default UnderReview;
