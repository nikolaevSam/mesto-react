import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

export default function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main>
      <section
        className="profile">
        <div
          className="profile-info">
          <button
            className="profile-info__avatar-button"
            aria-label="изменить авата"
            type="button"
            onClick={onEditAvatar} />
          <img
            className="profile-info__avatar"
            src={currentUser.avatar}
            alt-text="аватар"
          />
          <h1 className="profile-info__title">
            {currentUser.name}
          </h1>
          <button
            className="profile-info__edit"
            aria-label="редактирование профиля"
            type="button"
            onClick={onEditProfile} />
          <p
            className="profile-info__subtitle">
            {currentUser.about}
          </p>
        </div>
        <button
          className="profile__add"
          aria-label="добавить место"
          type="button"
          onClick={onAddPlace} />
      </section>
    </main >
  );
}