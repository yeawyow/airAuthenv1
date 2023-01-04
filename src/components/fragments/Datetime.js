import React, { useState } from "react";

export default function Datetime() {
  // const date = new Date().toLocaleDateString();
  let time = new Date().toLocaleTimeString("th-TH");

  const [ctime, setCtime] = useState(time);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString("th-TH");
    setCtime(time);
  };
  setInterval(UpdateTime, 1000);

  const date = new Date();

  const result = date.toLocaleDateString("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });

  const datevn = new Date();

  const vnYear = datevn
    .toLocaleDateString("th-TH", {
      year: "2-digit",
    })
    .substr(4);
  const vnMonth = datevn.getMonth() + 1;
  const vnDay = datevn.getDate();
  const vnHoure = datevn.getHours().toString().padStart(2, "0");
  const vnMinutes = datevn.getMinutes().toString().padStart(2, "0");
  const vnSec = datevn.getSeconds().toString().padStart(2, "0");
  const vn = vnYear + vnMonth + vnDay + vnHoure + vnMinutes + vnSec;
  const vstdate = datevn.toLocaleDateString("en-CA"); // 2020-08-19 (year-month-day) notice the different locale
  //console.log(vn);
  return (
    <div>
      <>
        <p> {result}</p>
        <p>เวลา {ctime}</p>

        {/*} <p>VN: {vn}</p>
        <p>vstdate:{vstdate}</p>{*/}
      </>
    </div>
  );
}
