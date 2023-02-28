import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";

export const Users = (props) => {
  //
  const [usersToShow, setUsersToShow] = useState(props.users);

  const [value, setValue] = useState("");

  const onChange = (e) => {
    let value = e.target.value;
    setValue(value);
    console.log(value);
  };
  useEffect(() => {
    if (value) {
      const filteredUsers = usersToShow.filter((user) => {
        return user.name.includes(value);
      });
      console.log(filteredUsers);
      setUsersToShow(filteredUsers);
    }
    console.log("is value empty");
  }, [value]);

  return (
    <div>
      <div>
        <p>Filter here</p>
        <input type="text" value={value} onChange={onChange} />
      </div>
      <div>
        {usersToShow?.map((user, i) => {
          return (
            <div key={i}>
              <p>Name: {user.name}</p>
              <p>Username: {user.Username}</p>
              <p>Email: {user.Email}</p>
              <p>Phone: {user.Phone}</p>
              <p>Website: {user.Website}</p>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};
