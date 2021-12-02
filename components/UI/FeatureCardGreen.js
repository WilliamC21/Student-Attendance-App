import Styles from "./Card.module.css";

const Card = (props) => {
  return <div className={Styles["feature-card-green"]}>{props.children}</div>;
};

export default Card;
