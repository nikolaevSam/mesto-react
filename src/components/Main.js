import Card from "./Card.js";

export default function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  userName,
  userDescription,
  userAvatar,
  cards
}) {
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
            style={{ backgroundImage: `url(${userAvatar})` }}
            alt="аватар"
          />
          <h1 className="profile-info__title">
            {userName}
          </h1>
          <button
            className="profile-info__edit"
            aria-label="редактирование профиля"
            type="button"
            onClick={onEditProfile} />
          <p
            className="profile-info__subtitle">
            {userDescription}
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
        {cards.map((card) =>
        (<Card
          card={card}
          onCardClick={onCardClick}
          key={card._id}>
        </Card>))}
      </section>
    </main>
  );
}