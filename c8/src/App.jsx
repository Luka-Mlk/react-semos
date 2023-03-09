import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/Home";
import { Movies } from "./components/Movies";
// import { Homepage } from "./components/Homepage";
// import { Books } from "./components/Books";
// import { BooksList } from "./components/BookList";

function App() {
  return (
    <div className="App">
      {/* <h1>React router</h1> */}
      {/* <Link to="/">Home</Link>
      <br />
      <Link to="/books">BooksLis</Link> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        {/* <Route path="/" element={<Homepage />} />
        <Route path="/books" element={<BooksList />} /> */}
      </Routes>
    </div>
  );
}

export default App;
