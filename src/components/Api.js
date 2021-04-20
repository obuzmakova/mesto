export default class Api {
    constructor(options) {
        this._url = options.baseUrl;
        this._headers = options.headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            headers: this._headers,
        })
            .then(this._checkResponse);
    }

    getInitialCards() {
        return fetch(`${this._url}/cards`, {
            headers: this._headers,
        })
            .then(this._checkResponse);
    }

    updateUserInfo(newName, newAbout) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: newName,
                about: newAbout
            })
        })
            .then(this._checkResponse);
    }

    addNewCard(newName, newLink) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: newName,
                link: newLink
            })
        })
            .then(this._checkResponse);
    }

    deleteCard(cardsId) {
        return fetch(`${this._url}/cards/${cardsId}`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then(this._checkResponse);
    }

    setLike(cardsId) {
        return fetch(`${this._url}/cards/likes/${cardsId}`, {
            method: 'PUT',
            headers: this._headers
        })
            .then(this._checkResponse);
    }
}