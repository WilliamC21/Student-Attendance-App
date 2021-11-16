import ListItem from "./ListItem";
import Card from "../Card";

const ListContainer = (props) => {
  return (
    <Card>
      <li>
        {props.items.map((user) => (
          <ListItem key={user.id} firstName={user.firstName} />
        ))}
      </li>
    </Card>
  );
};

export default ListContainer;
