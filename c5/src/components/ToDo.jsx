export const ToDo = ({ listOfToDos, markToDoAsDone }) => {
  //

  return (
    <ol>
      {listOfToDos.map((todo, i) => {
        return (
          <li key={i}>
            <span>{todo.text}</span>
            <input
              type="checkbox"
              value={todo.done}
              onChange={() => {
                markToDoAsDone();
              }}
            />
          </li>
        );
      })}
    </ol>
  );
};
