import ReactModal from 'react-modal';
import Modal from 'react-modal';
import css from "./ImageModal.module.css"
import { useState } from "react";

export default function ModalWindow({ image }) {

    const [modalIsOpen, setIsOpen] = useState(false);

     function openModal() {
            setIsOpen(true);
    };
    function afterOpenModal() {
    subtitle.style.color = '#f00';
    return <img src={image.urls.regular}/>};

  function closeModal() {
    setIsOpen(false);
    };
    return (
        <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={css}
      >
       
        </Modal> )
      
}