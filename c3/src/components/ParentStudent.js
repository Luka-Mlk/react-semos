import { Student } from "./Student";

export function ParentStudent() {
  const students = [
    { name: "Mario", lastName: "Mariov", index: 1 },
    { name: "Ivan", lastName: "Ivanov", index: 2 },
    { name: "Marin", lastName: "Marinov", index: 3 },
    { name: "Aleksandar", lastName: "Ivanov", index: 4 },
  ];
  return (
    <div>
      <Student props={students} /*semester={"Leten"}*/ />
    </div>
  );
}
