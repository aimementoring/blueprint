import React from "react";
import PropTypes from "prop-types";
import styles from "./modal.module.scss";

const Modal = props => {
  const { children, handleModal } = props;

  if (!handleModal) {
    return null;
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalBody} onClick={handleModal}>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  handleModal: PropTypes.func,
  children: PropTypes.node,
};

Modal.defaultProps = {
  children: null,
  handleModal: null,
};

export default Modal;
