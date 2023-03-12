import Card from "./Card.js";
import { useContext } from "react";
import { CardContext } from "../contexts/CardContext.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

export default function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  onCardLike,
  onCardDelete
}) {
  const currentUser = useContext(CurrentUserContext);
  const cards = useContext(CardContext);

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
      <section
        className="elements" >
        {cards.map((card, index) =>
        (<Card
          key={index}
          card={card}
          onCardClick={onCardClick}
          onCardLike={onCardLike}
          onCardDelete={onCardDelete}>
        </Card>))}
      </section>
    </main >
  );
}