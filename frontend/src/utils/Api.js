import { 
  baseUrl,
  baseToken } from "../utils/constant";

// класс для работы с сервером
 class API {

  constructor(url,token) {
    this._url = url;
    this._token = token;
  }

  // метод инициализации карточек
  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}` // this._token
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    // отклоняем промис, чтобы перейти в блок catch, если сервер вернул ошибку
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    });
  }

    // метод инициализации данных пользователя
  getUserData() {
    return fetch(`${this._url}/users/me`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}` // this._token
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    // отклоняем промис, чтобы перейти в блок catch, если сервер вернул ошибку
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    });
  }

    // сохранение на сервере отредактированных данных пользователя
  setUserData({name, about}) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`, // this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name, about})
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    // отклоняем промис, чтобы перейти в блок catch, если сервер вернул ошибку
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    }); 
  }

    // добавление на сервере новой карточки
  postCard(data) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`, // this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    // отклоняем промис, чтобы перейти в блок catch, если сервер вернул ошибку
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    }); 
  }

  // метод удаления карточек
  deleteCard(idCard) {
    return fetch(`${this._url}/cards/${idCard}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}` // this._token
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    // отклоняем промис, чтобы перейти в блок catch, если сервер вернул ошибку
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    });
  }

  // ставим лайк карточке
  changeLikeCardStatus(idCard,like){
    return fetch(`${this._url}/cards/${idCard}/likes`, {
      method: like ? 'DELETE' : 'PUT',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}` // this._token
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
    }
    // отклоняем промис, чтобы перейти в блок catch, если сервер вернул ошибку
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    });
  }

  // метод получения данных карточки
  getCard(idCard) {
    return fetch(`${this._url}/cards/${idCard}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}` //this._token
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    // отклоняем промис, чтобы перейти в блок catch, если сервер вернул ошибку
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    });
  }

  // метод для обновления аватара пользователя
  patchAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`, // this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: data.avatar
      })
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    // отклоняем промис, чтобы перейти в блок catch, если сервер вернул ошибку
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    });
  }
}

// экземпляр класса для работы с сервером
// API для получение данных
export const apiData = new API(baseUrl,baseToken);
