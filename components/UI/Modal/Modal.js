import Styles from "./Modal.module.css";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const BackDrop = (props) => {
  return <div className={Styles.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={Styles.modal}>
      <div className={Styles.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const [_document, set_document] = useState(null);

  React.useEffect(() => {
    set_document(document);
  }, []);

  const portalElement = document.getElementById("overlays");
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
