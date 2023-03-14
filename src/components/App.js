import React, { useState, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import { CardContext } from '../contexts/CardContext.js';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import EditProfilePopup from './EditProfilePopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import ImagePopup from './ImagePopup.js';
import ConfirmDeletePopup from './ConfirmDeletePopup.js';
import api from '../utils/api.js';
import Card from './Card.js';
import '../page/index.css';

export default function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isDeleteCardPopup, setIsDeleteCardPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [cards, setCards] = useState([]);
  const [cardForDelete, setCardForDelete] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api.getUserInfo()
      .then(result => setCurrentUser(result))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    api.getInitialCards()
      .then(result => setCards(result))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    const close = (event) => {
      if (event.keyCode === 27) {
        closeAllPopups();
      }
    }
    document.addEventListener('keydown', close)
    return () => document.removeEventListener('keydown', close)
  }, [])

  function handleCardClick(card) {
    setSelectedCard(card);
  };

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  };

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  };

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  };

  function handleDeleteCardClick(card) {
    setCardForDelete(card);
    setIsDeleteCardPopup(true);
  };

  function handleLikeClick(card) {
    const isLiked = card.likes.some(item => item._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        setCards(newCards);
      })
      .catch(error => console.log(error));
  };

  function handleDeleteCard() {
    setIsLoading(true);
    api.deleteCard(cardForDelete._id)
      .then(() => {
        const newCards = cards.filter((item) => item._id !== cardForDelete._id);
        setCards(newCards);
        closeAllPopups();
      })
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
  };

  function handleUpdateUser(updatedData) {
    setIsLoading(true);
    api.setUserInfo(updatedData)
      .then(result => {
        setCurrentUser(result);
        closeAllPopups();
      })
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
  };

  function handleUpdateAvatar(updatedData) {
    setIsLoading(true);
    api.setAvatar(updatedData)
      .then(result => {
        setCurrentUser(result);
        closeAllPopups();
      })
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
  };

  function handleAppPlaceSubmit(updatedData) {
    setIsLoading(true);
    api.addCard(updatedData)
      .then(newCard => {
        setCards([...cards, newCard]);
        closeAllPopups();
      })
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
  };

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsDeleteCardPopup(false);
    setSelectedCard(null);
  };

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          isLoading={isLoading}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAppPlaceSubmit}
          isLoading={isLoading}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          isLoading={isLoading}
        />
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />
        <ConfirmDeletePopup
          card={selectedCard}
          isOpen={isDeleteCardPopup}
          onClose={closeAllPopups}
          onCardDelete={handleDeleteCard}
          isLoading={isLoading}
        />
        <CardContext.Provider value={cards}>
          <section
            className="elements" >
            {cards.map((card, index) =>
            (<Card
              key={index}
              card={card}
              onCardClick={handleCardClick}
              onCardLike={handleLikeClick}
              onCardDelete={handleDeleteCardClick} >
            </Card>))}
          </section>
        </CardContext.Provider>
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}