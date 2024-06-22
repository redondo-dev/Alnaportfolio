// components/FlowerModalButton.tsx
"use client";
import React, { useState } from "react";
import Modal from "react-modal";

// Styles for the modal (you may need to adjust these)
const modalStyles: Modal.Styles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "80%",
    height: "60vh",

    border: "none",
    borderRadius: "10px",
    padding: "0",
  },
};

const FlowerModalButton: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={openModal}
        className=" justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Click here to have your birthday gift
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Flower Modal"
      >
        <div className="p-4">
          <h2 className="text-xl mb-4">Beautiful flowers for beatiful ALNA</h2>
          <img
            src="/bouquet-of-flowers.jpg"
            alt="Bouquet of flowers"
            className="w-full  h-80 rounded-lg"
          />
          <audio controls className="mt-4 w-full">
            <source src="/Kenny-G-Youre-Beautiful.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <button
            onClick={closeModal}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Close gift
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default FlowerModalButton;
