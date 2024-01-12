import React from "react";
import MyComponent from './MyComponent';
import './CustomScroll.css'; // Import the CSS file

const IncompleteList = () => {

  return (
    <div className="grid gap-10">
      <div className="flex">
        <div className="w-5 h-5 rounded-l-lg mr-2 bg-red-600"></div>
        Incomplete
      </div>
      <div className="custom-scrollbar">
        <MyComponent />
      </div>
    </div>
  );
};

export default IncompleteList;
