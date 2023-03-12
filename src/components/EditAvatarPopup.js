import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm.js";

export default function EditAvatarPopup({ 
  isOpen, 
  onClose, 
  onUpdateAvatar }) {
  const updatedAvatarData = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();

    onUpdateAvatar({
      avatar: updatedAvatarData.current.value
    });
  };

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit} >
      <label className="form__label">
        <input
          id="input_avatar"
          className="form__input form__input_data_avatar"
          type="url"
          placeholder="Ссылка на картинку"
          name="avatar"
          required=""
          ref={updatedAvatarData} />
        <span className="form__error form__error_input_avatar" />
      </label>
    </PopupWithForm>
  );
}