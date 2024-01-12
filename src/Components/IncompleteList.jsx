import React from "react";
import MyComponent from './MyComponent';

const IncompleteList = () => {
  const customScrollbarStyle = {
    maxHeight: '100vh',
    overflowY: 'auto',
    scrollbarWidth: 'thin',  // For Firefox
    scrollbarColor: 'blue #f1f1f1',  // For Firefox
  };

  return (
    <div className="grid gap-10">
      <div className="flex">
        <div className="w-5 h-5 rounded-l-lg mr-2 bg-red-600"></div>
        Incomplete
      </div>
      <div style={customScrollbarStyle}>
        <MyComponent />
      </div>
    </div>
  );
};

export default IncompleteList;
