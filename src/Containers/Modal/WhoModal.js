import React, { Component } from 'react';
import Modal from 'react-modal';
import { WhoAmI } from '../../Components/About/AboutMe';

class WhyModal extends Component {
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
        <WhoAmI />
      </div>
        </Modal>
      </div>
    );
  }
};

export default WhyModal;