import React from "react";
import PropTypes from "prop-types";
import styles from "./modal.module.scss";

const Modal = props => {
  const { children, showModal, handleModal } = props;

  return (
    <>
      {showModal && (
        <div className={styles.modalOverlay}>
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
};

Modal.defaultProps = {
  children: null,
  handleModal: null,
  showModal: false,
};

export default Modal;
