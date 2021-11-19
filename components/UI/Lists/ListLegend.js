import React, { useState } from "react";

import CardStyles from "../Card.module.css";
import Card from "../FeatureCard";
import { HStack, Flex, Spacer, Box } from "@chakra-ui/react";
import Styles from "./ListLegend.module.css";

const ListLegend = (props) => {
  return (
    <Card>
      <Flex width="full">
        {props.labels.map((label, index) => (
          <div className={Styles["label-container"]}>
            <h2 key={index}>{label}</h2>
          </div>
        ))}
      </Flex>
    </Card>
  );
};

export default ListLegend;
