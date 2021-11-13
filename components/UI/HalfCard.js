import Styles from "./HalfCard.module.css";

const HalfCard = (props) => {
  return <div className={Styles.card}>{props.children}</div>;
};

export default HalfCard;
