export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
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

    setEventListeners() {
        this._popupSelector.querySelector('.popup__close-button')
            .addEventListener('click', this._clickClose);
        this._popupSelector.addEventListener('click', this._closeOnOverlay);
        document.addEventListener('keydown', this._handleEscClose);
    }

    renderLoading(text) {
        this._popupSelector.querySelector('.popup__submit-btn').textContent = text;
    }

    open() {
        this._popupSelector.classList.add('popup_opened');
        this.setEventListeners();
    }

    close() {
        document.removeEventListener('keydown', this._handleEscClose);
        this._popupSelector.removeEventListener('click', this._closeOnOverlay);
        this._popupSelector.removeEventListener('click', this._clickClose);
        this._popupSelector.classList.remove('popup_opened');
    }
}