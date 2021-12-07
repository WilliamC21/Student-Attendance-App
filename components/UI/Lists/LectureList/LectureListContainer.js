import LectureListItem from "./LectureListItem";
import ListLegend from "../ListLegend";
import Card from "../../Card";

const LectureListContainer = (props) => {
  return (
    <Card>
      <ListLegend labels={props.labels} />
      {props.items.map((lecture) => (
        <LectureListItem
          key={lecture.id}
          lectureID={lecture.id}
          lectureName={lecture.lectureName}
          lectureDate={lecture.dateTime}
          teacher={lecture.teacherID}
          course={lecture.courseID}
        />
      ))}
    </Card>
  );
};

export default LectureListContainer;
