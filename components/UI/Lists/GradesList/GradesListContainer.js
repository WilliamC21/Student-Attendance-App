import GradesListItem from "./GradesListItem";
import ListLegend from "../ListLegend";
import Card from "../../Card";
import { Flex, Spacer } from "@chakra-ui/react";

const ListContainer = (props) => {
  return (
    <Card>
      <ListLegend labels={props.labels} />
      {props.items.map((grade) => (
        <GradesListItem
          key={grade.gradeID}
          courseID={grade.courseID}
          assessmentName={grade.assessmentName}
          gradePercent={grade.gradePercent}
        />
      ))}
    </Card>
  );
};

export default ListContainer;
