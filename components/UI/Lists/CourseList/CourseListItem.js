import Styles from "./CourseListItem.module.css";
import FeatureCard from "../../FeatureCard";
import { Flex } from "@chakra-ui/react";

const ListItem = (props) => {
  return (
    <FeatureCard>
      <Flex width="full">
        <div className={Styles["start-container"]}>
          <h2>{props.courseID}</h2>
        </div>
        <div className={Styles["start-container"]}>
          <h2>{props.courseName}</h2>
        </div>
        <div className={Styles["end-container"]}>
          <h2>{props.teacherID}</h2>
        </div>
      </Flex>
    </FeatureCard>
  );
};

export default ListItem;
