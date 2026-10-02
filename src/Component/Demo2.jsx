import React, { useEffect, useState } from "react";

import axios from "axios";

export default function Demo2() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUsers(response.data);
    });
  }, []);
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
            <h2>{user.username}</h2>
            <h2>{user.email}</h2>
            <h2>{user.address.street}</h2>
        </div>
      ))}
    </div>
  );
}


