import Modal from "./Modal";

import Styles from "./Alert.module.css";

const Alert = (props) => {
  return (
    <Modal onClose={props.onCloseCart}>
      <div className={Styles.total}>
        <span>ALERT</span>
      </div>
      <div className={Styles.actions}>
        <button className={Styles["button--alt"]} onClick={props.onCloseCart}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default Alert;
