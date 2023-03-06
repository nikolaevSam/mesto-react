import PopupWithForm from "./PopupWithForm.js";

export default function EditProfilePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
    >
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
        />
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
        />
        <span className="form__error form__error_input_about" />
      </label>
    </PopupWithForm>
  );
}