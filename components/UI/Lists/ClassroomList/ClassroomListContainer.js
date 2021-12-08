import ClassroomListItem from "./ClassroomListItem";
import ListLegend from "../ListLegend";
import Card from "../../Card";
import { Flex, Spacer } from "@chakra-ui/react";

const ClassroomListContainer = (props) => {
  return (
    <Card>
      <ListLegend labels={props.labels} />
      {props.items.map((classroom) => (
        <ClassroomListItem
          key={classroom.roomNum}
          roomNum={classroom.roomNum}
          building={classroom.building}
        />
      ))}
    </Card>
  );
};

export default ClassroomListContainer;
