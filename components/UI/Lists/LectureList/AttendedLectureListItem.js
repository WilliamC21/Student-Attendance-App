import React, { useState } from "react";
import Styles from "./AttendedLectureListItem.module.css";
import FeatureCardGreen from "../../FeatureCardGreen";
import FeatureCardRed from "../../FeatureCardRed";
import { HStack, Flex, Spacer, Box } from "@chakra-ui/react";

const LectureListItem = (props) => {
  const contents = (
    <Flex width="full">
      <div className={Styles["item-container"]}>
        <h2>{props.lectureCourse}</h2>
      </div>
      <div className={Styles["item-container"]}>
        <h2>{props.lectureTitle}</h2>
      </div>
      <div className={Styles["item-container"]}>
        <h2>{props.lectureID}</h2>
      </div>
      <div className={Styles["item-container"]}>
        <h2>{props.lectureDate}</h2>
      </div>
      <div className={Styles["item-container"]}>
        <h2>{props.attended}</h2>
      </div>
    </Flex>
  );

  if (props.attended) {
    return <FeatureCardGreen>{contents}</FeatureCardGreen>;
  } else {
    return <FeatureCardRed>{contents}</FeatureCardRed>;
  }
};

export default LectureListItem;
