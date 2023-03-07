function Card({ card, onCardClick}) {

  function handleClick() {
    onCardClick(card);
  };

  return (
    <article
      className="element">
      <button
        className="element__delete"
        aria-label="удалить место"
        type="button"
      />
      <img
        className="element__image"
        src={card.link}
        alt-text={card.name}
        onClick={handleClick} />
      <h2 className="element__text">
        {card.name}
      </h2>
      <div className="element__likes">
        <button
          className="element__like"
          aria-label="мне нравится / не нравится"
          type="button"
        />
        <span className="element__like-qty">
          {card.likes.length}
        </span>
      </div>
    </article>
  );
};

export default Card;