import { Routes, Route, Link } from "react-router-dom";

export const Movies = () => {
  let movieList = [
    {
      //   id: Date.now().slice(-4),
      id: 1,
      ime: "Once upon a time in Hollywood",
      rating: 4.5,
    },
    {
      //   id: toString(Date.now().slice(0, -4)),
      id: 2,

      ime: "Top Gun maverick",
      rating: 4,
    },
    {
      // id: toString(Date.now().slice(0, -4)),
      id: 3,

      ime: "Exorcism",
      rating: 3.5,
    },
  ];
  return (
    <>
      <ul>
        <Link to="/">Home</Link>
        {movieList.map((movie, i) => {
          return (
            <ul key={i}>
              <p>{movie.id}</p>
              <p>{movie.ime}</p>
              <p>{movie.rating}</p>
            </ul>
          );
        })}
      </ul>
    </>
  );
};
