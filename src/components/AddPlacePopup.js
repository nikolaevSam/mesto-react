import PopupWithForm from "./PopupWithForm.js";

export default function AddPlacePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name="place"
      title="Новое место"
      buttonText="Создать"
      isOpen={isOpen}
      onClose={onClose}
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
        />
        <span className="form__error form__error_input_url" />
      </label>
    </PopupWithForm>
  );
}