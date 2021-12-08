import React, { useState } from "react";

import CardStyles from "../Card.module.css";
import LegendCard from "../LegendCard";
import { HStack, Flex, Spacer, Box } from "@chakra-ui/react";
import Styles from "./ListLegend.module.css";

const ListLegend = (props) => {
  const legendStart = props.labels.slice(0, props.labels.length - 1);
  const legendEnd = props.labels[props.labels.length - 1];

  console.log(legendStart);
  console.log(legendEnd);

  console.log(props.labels.length);
  return (
    <LegendCard>
      <Flex width="full">
        {legendStart.map((label, index) => (
          <div className={Styles["label-container"]} key={index}>
            <h2 key={index}>{label}</h2>
          </div>
        ))}

        <div className={Styles["label-container-end"]}>
          <h2>{legendEnd}</h2>
        </div>
      </Flex>
    </LegendCard>
  );
};

export default ListLegend;
