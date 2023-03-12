import React, { useState, useEffect, useContext } from "react";
import PopupWithForm from "./PopupWithForm.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

export default function EditProfilePopup({ 
  isOpen, 
  onClose, 
  onUpdateUser }) {
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(event) {
    event.preventDefault();

    onUpdateUser({
      name: name,
      about: description
    });
  };

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit} >
      <label className="form__label">
        <input
          id="input_name"
          className="form__input form__input_data_name"
          type="text"
          placeholder="Имя Фамилия"
          name="name"
          minLength={2}
          maxLength={40}
          required=""
          value={name}
          onChange={(event) => setName(event.target.value)} />
        <span className="form__error form__error_input_name" />
      </label>
      <label className="form__label">
        <input
          id="input_about"
          className="form__input form__input_data_job"
          type="text"
          placeholder="Работа"
          name="about"
          minLength={2}
          maxLength={200}
          required=""
          value={description}
          onChange={(event) => setDescription(event.target.value)} />
        <span className="form__error form__error_input_about" />
      </label>
    </PopupWithForm>
  );
}