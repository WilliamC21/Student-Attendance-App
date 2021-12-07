import React, { useState } from "react";
import Styles from "./AttendedLectureListItem.module.css";
import FeatureCardGreen from "../../FeatureCardGreen";
import FeatureCardRed from "../../FeatureCardRed";
import Image from "next/image";
import { HStack, Flex, Spacer, Box } from "@chakra-ui/react";

const LectureListItem = (props) => {
  const checkCross = (
    <div className={Styles["item-container-centre"]}>
      <h2>
        {props.attended ? (
          <img
            src="https://img.icons8.com/material-outlined/48/000000/checked--v3.png"
            alt="Attended"
          />
        ) : (
          <img
            src="https://img.icons8.com/material-outlined/48/000000/cancel--v1.png"
            alt="Did not attend"
          />
        )}
      </h2>
    </div>
  );

  //

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
      {checkCross}
    </Flex>
  );

  if (props.attended) {
    return <FeatureCardGreen>{contents}</FeatureCardGreen>;
  } else {
    return <FeatureCardRed>{contents}</FeatureCardRed>;
  }
};

export default LectureListItem;
