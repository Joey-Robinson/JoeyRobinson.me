import React, { Component } from 'react';
import { MySkillSet } from '../../Components/About/AboutMe';
import Modal from 'react-modal';

class SkillsModal extends Component {
  state = {
    showModal: false
  };
  handleOpenModal = () => {
    this.setState({showModal: true});
  }
  handleCloseModal = () => {
    this.setState({showModal: false});
  }
  render() {
    return (
      <div>
        <button 
          className="ButtonModalOpen" 
          onClick={this.handleOpenModal}
        >
          Find Out
        </button>
        <Modal
          isOpen={this.state.showModal}
          contentLabel="What is this"
          onRequestClose={this.handleCloseModal}
          className="AboutModal"
          overlayClassName="Overlay"
        >
        <div>
          <MySkillSet />
        </div>
        </Modal>
      </div>
    );
  }
};

export default SkillsModal;