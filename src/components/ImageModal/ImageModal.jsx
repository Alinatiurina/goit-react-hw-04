import Modal from 'react-modal';
import css from "./ImageModal.module.css";

Modal.setAppElement('#root');

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)' // Темный прозрачный фон
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff", // Фон модального окна
    borderRadius: "8px", // Скругление углов
    border: "none", // Убираем границу
    padding: "20px", // Добавляем отступы
    maxHeight: "80vh" // Ограничение высоты модального окна
  }
};

export default function ImageModal({ image, imgModal, onModalClose }) {
  return (
    <Modal isOpen={imgModal} onRequestClose={onModalClose} style={customStyles}>
      <div className={css.modalContent}>
        <button className={css.closeButton} onClick={onModalClose}>Закрыть</button>
        <img src={image} alt="modal" className={css.modalImage} />
      </div>
    </Modal>
  );
}
