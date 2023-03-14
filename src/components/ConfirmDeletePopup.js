import PopupWithForm from "./PopupWithForm.js";

export default function ConfirmDeletePopup({
  isOpen,
  onClose,
  onCardDelete,
  isLoading }) {

  function handleSubmit(event) {
    event.preventDefault();

    onCardDelete();
  };
  
  return (
    <PopupWithForm
      name="deleteCard"
      title="Вы уверены?"
      buttonText={`${isLoading ? "Удаление..." : "Да"}`}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit} />
  )
}