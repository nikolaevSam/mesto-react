export default function ImagePopup({
  card={card},
  onClose={onClose}}) {
  return (
    <div
      className={"popup popup_type_image" + (card !== null &&  " popup_opened")}>
      <figure
        className="popup__container-image">
        <button
          className="popup__close"
          aria-label="закрыть popup"
          type="button"
          onClick={onClose}/>
        <img
          src={card !== null ? card.link: "#"}
          alt={card !== null ? card.name: "#"}
          className="popup__image"/>
        <figcaption
          className="popup__description">
            {card !== null ? card.name: "#"}
        </figcaption>
      </figure>
    </div>
  );
}