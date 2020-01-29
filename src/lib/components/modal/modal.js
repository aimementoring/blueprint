import React from "react";
import PropTypes from "prop-types";
import styles from "./modal.module.scss";

const Modal = props => {
  const { children, showModal, handleModal, backGroundStyle } = props;

  return (
    <>
      {showModal && (
        <div
          className={styles.modalOverlay}
          style={!backGroundStyle ? null : backGroundStyle}
        >
          <div className={styles.modalBody} onClick={handleModal}>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  handleModal: PropTypes.func,
  showModal: PropTypes.bool,
  backGroundStyle: PropTypes.objectOf({
    background: PropTypes.string,
    backgroundSize: PropTypes.string,
    backgroundPosition: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    backgroundAttachment: PropTypes.string,
  }),
};

Modal.defaultProps = {
  children: null,
  handleModal: null,
  showModal: false,
  backGroundStyle: null,
};

export default Modal;
