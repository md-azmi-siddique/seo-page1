import React from "react";

const ListItem = () => {
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
        
        <div class="col-span-2 ...">07</div>
      </div>
    </div>
  );
};

export default ListItem;
