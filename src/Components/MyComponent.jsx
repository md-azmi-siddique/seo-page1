// MyComponent.js
import React from 'react';
import ListItem from './ListItem';

const MyComponent = () => {
  // Assuming you have an array of items
  const items = [1, 2,3,4,5,6,7,8,9,10,11,12,13,14,15];

  return (
    <div className="grid gap-10">
      {items.map((item, index) => (
        <div key={index}>
          <ListItem />
        </div>
      ))}
    </div>
  );
};

export default MyComponent;
