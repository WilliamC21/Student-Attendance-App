import React, { useState } from "react";
import Styles from "./StudentListItem.module.css";
import FeatureCard from "../FeatureCard";
import { HStack, Flex, Spacer, Box } from "@chakra-ui/react";

const ListItem = (props) => {
  return (
    <FeatureCard>
      <Flex width="full">
        <div className={Styles["item-container"]}>
          <h2>{props.firstName}</h2>
        </div>
        <div className={Styles["item-container"]}>
          <h2>{props.lastName}</h2>
        </div>
        <div className={Styles["email-container"]}>
          <h2>{props.email}</h2>
        </div>
        <div className={Styles["end-container"]}>
          <h2>{props.attendance}</h2>
        </div>
      </Flex>
    </FeatureCard>
  );
};

export default ListItem;
