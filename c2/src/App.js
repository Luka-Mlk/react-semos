import "./css/example.css";
// import { AppClass } from "./AppClass";
// import { Info } from "./Info";
import { Hello } from "./components/Hello";
import { GoodbyeOdMene } from "./components/GoodbyeMoja";
import { Hobbies } from "./components/Hobbies";
import { FaHobby } from "./components/FavoriteHobby";
import { MoreAbtHobby } from "./components/MoreAbtHobby";
function App() {
  // let number = 10;
  // const element = <h1>Hello from Javascript React!</h1>;
  // const student = {
  //   name: "Laura",
  //   lastName: "Angelova",
  //   image:
  //     "https://m.media-amazon.com/images/I/51kjdUZRkfL._AC_UF894,1000_QL80_.jpg",
  // };
  // function studentFullName(student) {
  //   return student.name + " " + student.lastName;
  // }
  // const print = () => {
  //   console.log("hello from console");
  // };
  return (
    <div style={{ marginLeft: 10 }}>
      {/* <h1>Hello From react</h1>
      <h2 className="hello">Hello from react</h2>
      <p>5 + 5</p>
      <p> {5 + 5 - number} </p>
      {element}
      <h2>Hello, {studentFullName(student)}</h2>
      <button onClick={print}>Click me</button>
      <img
        src={student.image}
        alt="female manequin"
        style={{ height: 200 }}
      ></img>
      <AppClass />
      <Info /> */}
      <Hello />
      <GoodbyeOdMene />
      <Hobbies />
      <FaHobby />
      <MoreAbtHobby />
    </div>
  );
}

export default App;
