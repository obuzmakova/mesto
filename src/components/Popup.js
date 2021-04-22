export default class Popup {
    constructor(popupElement) {
        this._popupElement = popupElement;
        this._clickClose = this._clickClose.bind(this);
        this._handleEscClose = this._handleEscClose.bind(this);
        this._closeOnOverlay = this._closeOnOverlay.bind(this);
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    _closeOnOverlay(evt) {
        if (evt.target === evt.currentTarget) {
            this.close();
    }
}
    _clickClose() {
        this.close();
    }

    _setEventListeners() {
        this._popupElement.querySelector('.popup__close-button')
            .addEventListener('click', this._clickClose);
        this._popupElement.addEventListener('click', this._closeOnOverlay);
        document.addEventListener('keydown', this._handleEscClose);
    }

    open() {
        this._popupElement.classList.add('popup_opened');
        this._setEventListeners();
    }

    close() {
        document.removeEventListener('keydown', this._handleEscClose);
        this._popupElement.removeEventListener('click', this._closeOnOverlay);
        this._popupElement.removeEventListener('click', this._clickClose);
        this._popupElement.classList.remove('popup_opened');
    }
}