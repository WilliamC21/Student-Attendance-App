import React, { useState } from "react";
import Styles from "./ListItem.module.css";
import Card from "../Card";

const ListItem = (props) => {
  return (
    <li className={Styles["list-item"]}>
      <div className="expense-item__description">
        <h2>Bob</h2>
        <div className="expense-item__price">45%</div>
      </div>
    </li>
  );
};

export default ListItem;
