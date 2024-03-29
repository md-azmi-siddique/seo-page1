import React, { useState } from 'react';
import { TiMessages } from "react-icons/ti";
import { GrAttachment } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";


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
      <div class="grid grid-cols-7 gap-8">
        <div class="...">01</div>
        <div class="...">02</div>
        <div class="...">12+</div>
        <div class="grid grid-cols-2">
          <div><TiMessages /></div>
          <div>15</div>
        </div>
        <div class="grid grid-cols-2">
          <div><GrAttachment /></div>
          <div>25</div>
        </div>
        <div class="grid grid-cols-2">
          <div><SlCalender /></div>
          <div>{currentDate}</div>
        </div>
        <div class="col-span-2 ..."></div>
      </div>
    </div>
  );
};

export default ListItem;
