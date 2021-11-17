import ListItem from "./ListItem";
import Card from "../Card";
import { Flex, Spacer } from "@chakra-ui/react";

const ListContainer = (props) => {
  return (
    <Card>
      <ListItem items={props.items} />
    </Card>
  );
};

export default ListContainer;
