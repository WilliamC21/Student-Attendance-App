import Styles from "./GradesListItem.module.css";
import FeatureCard from "../../FeatureCard";
import { Flex } from "@chakra-ui/react";

const ListItem = (props) => {
  return (
    <FeatureCard>
      <Flex width="full">
        <div className={Styles["start-container"]}>
          <h2>{props.courseID}</h2>
        </div>
        <div className={Styles["mid-container"]}>
          <h2>{props.assessmentName}</h2>
        </div>
        <div className={Styles["end-container"]}>
          <h2>{props.gradePercent}%</h2>
        </div>
      </Flex>
    </FeatureCard>
  );
};

export default ListItem;
