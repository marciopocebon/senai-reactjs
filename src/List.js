import React from "react";

const List = ({ children, users }) => (
  <div>
    <h1>{children}</h1>
    <ul>
      {users.map(user => (
        <li key={user._id}>
          {user.name} ({user.email})
        </li>
      ))}
    </ul>
  </div>
);

export default List;
