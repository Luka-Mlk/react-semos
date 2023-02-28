import "./App.css";
import { CounterClass } from "./components/CounterClass";
import { DateClass } from "./components/DateClass";
import { ToDo } from "./components/ToDo";
import { useState } from "react";
import { Users } from "./components/Users";
import { CarApp } from "./components/CarApp";

function App() {
  // let users = [
  //   {
  //     id: 1,
  //     name: "Leanne Graham",
  //     username: "Bret",
  //     email: "Sincere@april.biz",
  //     phone: "1-770-736-8031 x56442",
  //     website: "hildegard.org",
  //   },
  //   {
  //     id: 2,
  //     name: "Ervin Howell",
  //     username: "Antonette",
  //     email: "Shanna@melissa.tv",
  //     phone: "010-692-6593 x09125",
  //     website: "anastasia.net",
  //   },
  //   {
  //     id: 3,
  //     name: "Clementine Bauch",
  //     username: "Samantha",
  //     email: "Nathan@yesenia.net",
  //     phone: "1-463-123-4447",
  //     website: "ramiro.info",
  //   },
  //   {
  //     id: 4,
  //     name: "Patricia Lebsack",
  //     username: "Karianne",
  //     email: "Julianne.OConner@kory.org",
  //     phone: "493-170-9623 x156",
  //     website: "kale.biz",
  //   },
  //   {
  //     id: 5,
  //     name: "Chelsey Dietrich",
  //     username: "Kamren",
  //     email: "Lucio_Hettinger@annie.ca",
  //     phone: "(254)954-1289",
  //     website: "demarco.info",
  //   },
  //   {
  //     id: 6,
  //     name: "Mrs. Dennis Schulist",
  //     username: "Leopoldo_Corkery",
  //     email: "Karley_Dach@jasper.info",
  //     phone: "1-477-935-8478 x6430",
  //     website: "ola.org",
  //   },
  // ];

  // const [todos, setTodos] = useState([
  //   { id: 1, text: "learn react", done: false },
  //   { id: 2, text: "learn react", done: false },
  //   { id: 3, text: "learn react", done: false },
  // ]);
  // const [newTodo, setNewTodo] = useState("");
  // const addNewTODO = () => {
  //   let newObject = {
  //     text: newTodo,
  //     done: false,
  //   };
  //   setTodos([...todos, newObject]);
  //   setNewTodo("");
  // };
  // const markToDoAsDone = (todo) => {
  //   setTodos([
  //     todos.map((item) => {
  //       item.id === todo.id
  //         ? {
  //             id: item.id,
  //             text: item.text,
  //             done: !item.done,
  //           }
  //         : item;
  //     }),
  //   ]);
  // };
  return (
    <div className="App">
      <div>
        {/* <CounterClass /> */}
        {/* <DateClass /> */}
        {/* <input
          type="text"
          value={newTodo}
          placeholder="enter new ToDo"
          onChange={(e) => {
            setNewTodo(e.target.value);
          }}
        />
        <button onClick={addNewTODO}>Add ToDo</button>
        <ToDo listOfToDos={todos} markToDoAsDone={markToDoAsDone} /> */}
        {/* <Users users={users} /> */}
        <CarApp />
      </div>
    </div>
  );
}

export default App;
