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
    }
}