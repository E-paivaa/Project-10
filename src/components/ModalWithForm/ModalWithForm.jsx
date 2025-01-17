import "./ModalWithForm.css";

function ModalWithForm({
  children,
  submitButton,
  title,
  isOpen,
  onClose,
}) {
  return (
    <div
      className={`modal ${isOpen ? "modal_opened" : ""}`}
    >
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button type="button" className="modal__close" onClick={onClose}>
          X
        </button>
        <form className="modal__form">
          {children}
          <button type="submit" className="modal__submit">
            {submitButton}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
