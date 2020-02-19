import React, { useEffect } from "react";
import PropTypes, { element } from "prop-types";
import styles from "./modal.module.scss";

const Modal = props => {
  const {
    children,
    showModal,
    handleModal,
    backgroundColor,
    backGroundStyle,
    hideBodyOverflowY,
  } = props;

  useEffect(() => {
    // This is manipulating the parent DOM of the react virtual DOM, so I think its going to be OK for what we need?
    // we would have to hide overflow for the body and app and then make them fill the page and then adjust the react elements to be able to controll overflow-y in css, I think.
    document.body.style.overflowY =
      showModal && hideBodyOverflowY ? "hidden" : "auto";
  }, [showModal]);

  // TODO: Maybe add close X or icon for handleModal and remove from modalBody.

  return (
    <>
      {showModal && (
        <>
          <div
            className={styles.modalOverlay}
            onClick={handleModal}
            style={!backGroundStyle ? { backgroundColor } : backGroundStyle}
          />
          <div className={styles.modalBody}>{children}</div>
        </>
      )}
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.instanceOf(element),
    PropTypes.node,
  ]),
  handleModal: PropTypes.func,
  showModal: PropTypes.bool,
  backGroundStyle: PropTypes.objectOf({
    background: PropTypes.string,
    backgroundSize: PropTypes.string,
    backgroundPosition: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    backgroundAttachment: PropTypes.string,
  }),
  hideBodyOverflowY: PropTypes.bool,
  backgroundColor: PropTypes.string,
};

Modal.defaultProps = {
  children: null,
  handleModal: null,
  showModal: false,
  backGroundStyle: null,
  hideBodyOverflowY: true,
  backgroundColor: "black",
};

export default Modal;
