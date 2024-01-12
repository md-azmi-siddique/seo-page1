import React from "react";
import MyComponent from './MyComponent';
import './CustomScroll.css';

const TodoList = () => {
  return (
    <div className="grid gap-10">
      <div className="flex">
        <div className="w-5 h-5 rounded-l-lg mr-2 bg-blue-500"></div>
        To Do
      </div>
      <div className="custom-scrollbar">
        <MyComponent />
      </div>
    </div>
  );
};

export default TodoList;
