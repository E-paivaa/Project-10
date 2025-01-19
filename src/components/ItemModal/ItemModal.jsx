import "./ItemModal.css";

function ItemModal({card, onClose, isOpen, onDeleteItem }) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content_type_image">
        <button type="button" className="modal__close" onClick={onClose}>
          X
        </button>
        <img src={card.link} alt="Garment" className="modal__image" />
        
        <div className="modal__footer">
          <h2 className="modal__description">{card.name}</h2>
          <p className="modal__weather"> Weather: {card.weather}</p>
          <button type="button" className="modal__delete_item"  onClick={() => onDeleteItem(item._id)}>
          Delete Item</button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
