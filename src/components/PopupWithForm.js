export default function PopupWithForm({
  name,
  title,
  buttonText,
  isOpen,
  onClose,
  onSubmit,
  children}) {
  return (
    <div
      className={`popup popup_type_${name}` + (isOpen && " popup_opened")}>
      <div
        className="popup__container">
        <button
          className="popup__close"
          type="button"
          aria-label="close popup"
          onClick={onClose}>
        </button>
        <h2
          className="popup__title">
          {title}
        </h2>
        <form
          className="form"
          name={`${name}`}
          noValidate
          onSubmit={onSubmit}>
          {children}
          <button
            className="form__button"
            type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}