// import { UserContext } from "../App";

export function User() {
  return (
    <UserContext.Consumer>
      {(value) => <h1>Hello {value} from react Conteext</h1>}
    </UserContext.Consumer>
  );
}
