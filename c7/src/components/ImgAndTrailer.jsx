import React from "react";
import { Segal } from "../App";
export const ImgAndTrailer = () => {
  const segalMovie = React.useContext(Segal);
  console.log(segalMovie);
  return (
    <>
      <div>
        {segalMovie.img.map((img, i) => {
          return (
            <>
              <img style={{ height: "400px" }} src={img} key={i} />
            </>
          );
        })}
        <a href={segalMovie.trailer}>Trailer</a>
      </div>
    </>
  );
};
