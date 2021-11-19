import CourseListItem from "./CourseListItem";
import ListLegend from "../ListLegend";
import Card from "../../Card";
import { Flex, Spacer } from "@chakra-ui/react";

const ListContainer = (props) => {
  return (
    <Card>
      <ListLegend labels={props.labels} />
      {props.items.map((course) => (
        <CourseListItem
          key={course.courseID}
          courseID={course.courseID}
          courseName={course.courseName}
          teacherID={course.teacherID}
        />
      ))}
    </Card>
  );
};

export default ListContainer;
