import React from "react";
import { Segal } from "../App";

export const InformationAboutMovie = () => {
  const segalMovie = React.useContext(Segal);
  console.log(segalMovie);
  return (
    <>
      <div>
        <h1>Name: {segalMovie.name}</h1>
        <p>Plot: {segalMovie.plot}</p>
        <p>Rating: {segalMovie.rating}</p>
        <p>Release date: {segalMovie.releaseDate}</p>
      </div>
    </>
  );
};
