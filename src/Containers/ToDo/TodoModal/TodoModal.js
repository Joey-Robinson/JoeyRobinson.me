import React from 'react';
import Modal from 'react-modal';
import TodoModal from './TodoModal.scss';
const OptionModal = (props) => {
  return (
    <Modal
      className="ModalOverlay"
      isOpen={!!props.selectedOption}
      onRequestClose={props.closeModal}
      contentLabel="Selected Option"
    >
      {props.selectedOption && <p className="ModalBody">{props.selectedOption}</p>}
      <button
        className="ModalButton" 
        onClick={props.closeModal}>Okay</button>
    </Modal>
  );
}

export default OptionModal;