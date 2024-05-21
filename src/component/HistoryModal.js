import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const HistoryModal = ({ isOpen, onRequestClose, history }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="History Modal"
    >
     
      <ul>
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={onRequestClose}>Clear History</button>
    </Modal>
  );
};

export default HistoryModal;
