import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ 
  card, 
  onCardClick, 
  onCardLike, 
  onCardDelete }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(item => item._id === currentUser._id);

  function handleClick() {
    onCardClick(card);
  };

  function handleLikeClick() {
    onCardLike(card);
  };

  function handleDeleteClick() {
    onCardDelete(card);
  };

  return (
    <article
      className="element">
      <button
        className={`element__delete ${isOwn ? "element__delete_visible" : "element__delete_hidden"}`}
        aria-label="удалить место"
        type="button"
        onClick={handleDeleteClick} />
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
          className={`element__like ${isLiked ? "element__like_active" : "element__like_inactive"}`}
          aria-label="мне нравится / не нравится"
          type="button"
          onClick={handleLikeClick} />
        <span className="element__like-qty">
          {card.likes.length}
        </span>
      </div>
    </article>
  );
};

export default Card;