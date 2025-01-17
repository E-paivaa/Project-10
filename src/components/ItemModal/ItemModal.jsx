import "./ItemModal.css";

function ItemModal({ activeModal, card, onClose }) {
  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__content modal__content_type_image">
        <button type="button" className="modal__close" onClick={onClose}>
          X
        </button>
        <img src={card.link} alt="Garment" className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__description">{card.name}</h2>
          <p className="modal__weather"> Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
