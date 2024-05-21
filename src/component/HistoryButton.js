import React, { useState } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory } from '@fortawesome/free-solid-svg-icons';
import './HistoryButton.css';
const buttonStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: 'black',
    color: 'white',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  };

const HistoryButton = ({ history, clearHistory }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen); // Toggle the state of the modal
  };

  return (
    
    <>
      <button className="history-button" onClick={toggleModal}>
        <FontAwesomeIcon icon={faHistory} className="history-icon" />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal} // Close the modal when clicking outside or pressing Escape key
        className="history-modal"
        overlayClassName="history-overlay"
        contentLabel="History Modal"
      >
        <h2>Calculation History</h2>
        <ul>
        {history && history.map((item, index) => (
  <li key={index}>{item}</li>
))}

        </ul>
        <button className="clear-history-button" onClick={clearHistory}>Clear History</button>
        <button className="clear-history-button"  onClick={toggleModal}>Close</button>
      </Modal>
    </>
  );
};

export default HistoryButton;
