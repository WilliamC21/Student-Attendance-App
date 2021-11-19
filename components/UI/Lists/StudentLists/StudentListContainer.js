import StudentListItem from "./StudentListItem";
import ListLegend from "../ListLegend";
import Card from "../../Card";

const ListContainer = (props) => {
  return (
    <Card>
      <ListLegend labels={props.labels} />
      {props.items.map((student) => (
        <StudentListItem
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
