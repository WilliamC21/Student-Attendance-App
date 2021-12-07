import AttendedLectureListItem from "./AttendedLectureListItem";
import ListLegend from "../ListLegend";
import Card from "../../Card";

const LectureListContainer = (props) => {
  console.log("here");
  console.log(props.items[0].attended);

  return (
    <Card>
      <ListLegend labels={props.labels} />
      {props.items.map((lecture) => (
        <AttendedLectureListItem
          key={lecture.lecture.lectureID}
          lectureCourse={lecture.lecture.courseID}
          lectureTitle={lecture.lecture.lectureName}
          lectureID={lecture.lectureID}
          attended={lecture.attended}
          lectureDate={lecture.lecture.dateTime}
        />
      ))}
    </Card>
  );
};

export default LectureListContainer;
