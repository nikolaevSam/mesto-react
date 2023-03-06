function Card({ card, onCardClick, key }) {

  function handleClick() {
    onCardClick(card);
  };

  return (
    <article
      className="element"
      key={key}>
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
        <span className="element__like-qty" />
      </div>
    </article>
  );
};

export default Card;