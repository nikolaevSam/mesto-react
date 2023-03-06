import { configApi } from "./utils.js";

class Api {
  constructor({ baseUrl, headers }) {
    this._dataUrl = baseUrl;
    this._headers = headers;
  }

  _checkStatus(res) {
    if (res.ok) {
      return res.json();
    } return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this._dataUrl}/cards`, {
      headers: this._headers
    }).then(res => this._checkStatus(res));
  }

  getUserInfo() {
    return fetch(`${this._dataUrl}/users/me`, {
      headers: this._headers
    }).then(res => this._checkStatus(res));
  }

  setUserInfo(data) {
    return fetch(`${this._dataUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    }).then(res => this._checkStatus(res));
  }

  addCard(data) {
    return fetch(`${this._dataUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    }).then(res => this._checkStatus(res));
  }

  deleteCard(cardId) {
    return fetch(`${this._dataUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    }).then(res => this._checkStatus(res));
  }

  addLike(cardId) {
    return fetch(`${this._dataUrl}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers
    }).then(res => this._checkStatus(res));
  }

  deleteLike(cardId) {
    return fetch(`${this._dataUrl}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers
    }).then(res => this._checkStatus(res));
  }

  setAvatar(data) {
    return fetch(`${this._dataUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar
      })
    }).then(res => this._checkStatus(res));
  }
};

const api = new Api(configApi);
export default api;