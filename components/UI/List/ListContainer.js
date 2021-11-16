import ListItem from "./ListItem";
import Card from "../Card";
import { Flex, Spacer } from "@chakra-ui/react";

const ListContainer = (props) => {
  return (
    <Card>
      <Flex>
        <h2>First Name</h2>
        <Spacer />
        <h2>Surname</h2>
        <Spacer />
        <h2>Email</h2>
        <Spacer />
        <h2>Attendance</h2>
      </Flex>
      {props.items.map((user) => (
        <ListItem
          key={user.id}
          firstName={user.firstName}
          lastName={user.lastName}
          email={user.email}
          attendance={user.attendance}
        />
      ))}
    </Card>
  );
};

export default ListContainer;
