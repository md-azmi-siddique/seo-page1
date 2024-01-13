import React, { useState } from 'react';

const ListItem = () => {
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString(undefined, options));
  return (
    <div>
      <div class="grid grid-cols-2">
        <div>Client Name</div>
        <div class="justify-self-end">Sadik Istiak</div>
      </div>
      <div class="grid grid-cols-3">
        <div class="col-span-2 ">Lorem, ipsum dolor sit</div>
        <div class="justify-self-end">05</div>
      </div>
      <div class="grid grid-cols-7 gap-0">
        <div class="...">01</div>
        <div class="...">02</div>
        <div class="...">03</div>
        <div class="...">04</div>
        <div class="...">04</div>
        <div class="col-span-2 ...">{currentDate}</div>
      </div>
    </div>
  );
};

export default ListItem;
