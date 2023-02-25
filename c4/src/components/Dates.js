import { useState } from "react";
import { ShowDate } from "./ShowDate";

export const Dates = () => {
  const [dates, setDates] = useState([]);

  const addDate = () => {
    let date = new Date().toString();
    let newDates = [...dates];
    console.log(dates);
    // console.log(date);
  };

  return (
    <div>
      {/* {dates.map((date, i) => {
        return <p key={i}>{date}</p>;
      })} */}
      <ShowDate dates={dates} />
      <button onClick={addDate}>Add Date</button>
    </div>
  );
};
