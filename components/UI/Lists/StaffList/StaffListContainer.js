import ListItem from "./StaffListItem";
import ListLegend from "../ListLegend";
import Card from "../../Card";
import { Flex, Spacer } from "@chakra-ui/react";

const ListContainer = (props) => {
  return (
    <Card>
      <ListLegend labels={props.labels} />
      {props.items.map((student) => (
        <ListItem
          key={student.id}
          firstName={student.firstName}
          lastName={student.lastName}
          email={student.email}
          attendance={student.attendance}
        />
      ))}
    </Card>
  );
};

export default ListContainer;
