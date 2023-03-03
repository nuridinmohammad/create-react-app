import React from "react";
import { Button } from "./Button";

const ListItem = () => {
  return (
    <>
      <li>
        <label className="active">
          <input type="checkbox" id="" />
          Cooking Todo
        </label>
        <Button id="edit">Edit</Button>
      </li>
    </>
  );
};

export default ListItem;
