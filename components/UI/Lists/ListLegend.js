import React, { useState } from "react";

import CardStyles from "../Card.module.css";
import LegendCard from "../LegendCard";
import { HStack, Flex, Spacer, Box } from "@chakra-ui/react";
import Styles from "./ListLegend.module.css";

const ListLegend = (props) => {
  return (
    <LegendCard>
      <Flex width="full">
        {props.labels.map((label, index) => (
          <div className={Styles["label-container"]} key={index}>
            <h2 key={index}>{label}</h2>
          </div>
        ))}
      </Flex>
    </LegendCard>
  );
};

export default ListLegend;
