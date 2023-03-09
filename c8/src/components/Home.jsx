import { Routes, Route, Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <h1>This is my page</h1>
      <h1>I am learning react router</h1>
      <Link to="/movies">Movies</Link>
    </>
  );
};
