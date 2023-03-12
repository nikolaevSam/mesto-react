import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm.js";

export default function AddPlacePopup({
  isOpen,
  onClose,
  onAddPlace }) {
    const updatedName = useRef(null);
    const updatedLink = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();

    onAddPlace({
      name: updatedName.current.value,
      link: updatedLink.current.value
    })
  };

  return (
    <PopupWithForm
      name="place"
      title="Новое место"
      buttonText="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="form__label">
        <input
          id="input_place"
          className="form__input form__input_data_place"
          type="text"
          placeholder="Название"
          name="name"
          minLength={2}
          maxLength={30}
          required=""
          ref={updatedName}
        />
        <span className="form__error form__error_input_place" />
      </label>
      <label className="form__label">
        <input
          id="input_url"
          className="form__input form__input_data_url"
          type="url"
          placeholder="Ссылка на картинку"
          name="link"
          required=""
          ref={updatedLink}
        />
        <span className="form__error form__error_input_url" />
      </label>
    </PopupWithForm>
  );
}