import PopupWithForm from "./PopupWithForm.js";

export default function EditAvatarPopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
    >
      <label className="form__label">
        <input
          id="input_avatar"
          className="form__input form__input_data_avatar"
          type="url"
          placeholder="Ссылка на картинку"
          name="avatar"
          required=""
        />
        <span className="form__error form__error_input_avatar" />
      </label>
    </PopupWithForm>
  );
}