import Styles from "./Card.module.css";

const Card = (props) => {
  return <div className={Styles["legend-card"]}>{props.children}</div>;
};

export default Card;
