import React from "react";
import MyComponent from './MyComponent';

const Over = () => {
  return (
    <div className="grid gap-10">
      <div className="flex">
        <div className="w-5 h-5 rounded-l-lg mr-2"></div>
        Over
      </div>
      <div>
        <MyComponent></MyComponent>
      </div>
    </div>
  );
};

export default Over;
