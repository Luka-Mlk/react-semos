import "./App.css";
import { User } from "./components/User";
import React from "react";
import { Homepage } from "./components/Homepage";
import { Movie } from "./components/Movie";

// export const UserContext = React.createContext();

// export const User2Context = React.createContext();
// const user = {
//   name: "Martin",
//   surname: "Trajkov",
//   jobPosition: "Developer",
//   hobby: "Football",
//   embg: 123456789,
//   city: "Radovish",
//   street: "8mi Septemvri",
//   number: 232,
// };

export const Segal = React.createContext();

const segalMovies = {
  img: [
    "./img/AboveTheLaw.jpg",
    "./img/AboveTheLaw.jpg",
    "./img/AboveTheLaw.jpg",
  ],
  name: "Above the law",
  rating: "2",
  zanr: "Akcija... mislam",
  plot: "Tolku los sto e dobar",
  releaseDate: 1988,
  trailer:
    "https://www.google.com/search?q=above+the+law+trailer&ei=OU0GZKjxLoCBxc8P4pOo4AE&ved=0ahUKEwjo8fq-ksj9AhWAQPEDHeIJChwQ4dUDCA8&uact=5&oq=above+the+law+trailer&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCAAQgAQyBggAEBYQHjIFCAAQhgMyBQgAEIYDMgUIABCGAzIFCAAQhgM6FggAEOoCELQCEIoDELcDENQDEOUCGAE6FgguEOoCELQCEIoDELcDENQDEOUCGAE6BQguEJECOgQILhBDOgQIABBDOgoILhDHARDRAxBDOgsILhCABBDHARDRAzoFCC4QgAQ6CAguEIAEENQCOgsILhCABBDHARCvAToHCC4Q1AIQQzoFCAAQkQI6CAgAEBYQHhAPSgQIQRgAULcGWLkhYIsiaAFwAXgAgAGEAogBsBSSAQYwLjE5LjGYAQCgAQGwAQrAAQHaAQQIARgH&sclient=gws-wiz-serp#fpstate=ive&vld=cid:666e3396,vid:BsbYE-Q474I",
};

function App() {
  return (
    <div className="App">
      {/* <UserContext.Provider value="Martin">
        <User />
      </UserContext.Provider>
      <h1>React context</h1> */}
      {/* <User2Context.Provider value={{ user, theme: "dark" }}>
        <Homepage user={user} />
      </User2Context.Provider> */}
      <Segal.Provider value={segalMovies}>
        <Movie movie={segalMovies} />
      </Segal.Provider>
    </div>
  );
}

export default App;
