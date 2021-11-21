import React, { useState } from "react";
import Styles from "./LectureListItem.module.css";
import FeatureCard from "../../FeatureCard";
import { HStack, Flex, Spacer, Box } from "@chakra-ui/react";

const LectureListItem = (props) => {
  return (
    <FeatureCard>
      <Flex width="full">
        <div className={Styles["item-container"]}>
          <h2>{props.lectureID}</h2>
        </div>
        <div className={Styles["item-container"]}>
          <h2>{props.lectureName}</h2>
        </div>
        <div className={Styles["email-container"]}>
          <h2>{props.lectureDate}</h2>
        </div>
        <div className={Styles["end-container"]}>
          <h2>{props.teacher}</h2>
        </div>
      </Flex>
    </FeatureCard>
  );
};

export default LectureListItem;
