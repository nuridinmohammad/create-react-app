import React from "react";
import { Button } from "./Button";

const Footer = ({ data = 0 }) => {
  return (
    <>
      <div className="row">
        <label htmlFor="">
          <input type="checkbox" id="" />
          ALL
        </label>
        <span>You Have {data} todo</span>
        <Button id="delete">Delete</Button>
      </div>
    </>
  );
};

export default Footer;
