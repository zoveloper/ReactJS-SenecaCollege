import React from "react";

const List = () => {
  const fruits = ["apPle", "Manggo", "Pineaplle"];

  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
