import React from "react";
import ListItem from "./ListItem";
import MyComponent from './MyComponent';

const IncompleteList = () => {
  return (
    <div className="grid gap-10">
      <div className="flex">
        <div className="w-5 h-5 rounded-l-lg mr-2 bg-red-600"></div>
        Incomplete
      </div>
      <div>
        <MyComponent></MyComponent>
      </div>
     
    </div>
  );
};

export default IncompleteList;
