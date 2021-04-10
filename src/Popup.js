export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._clickClose = this._clickClose.bind(this);
    }

    _handleEscClose() {
        debugger;
        // if (evt.key === 'Escape') {
        //     this.close();
        // }
    }

    _clickClose() {
        debugger;
        this.close();
    }

    setEventListeners() {
        this._popupSelector.querySelector('.popup__close-button')
            .addEventListener('click', this._clickClose);
        document.addEventListener('keydown', this._handleEscClose);
    }

    open() {
        console.log(this._popupSelector.classList);
        this._popupSelector.classList.add('popup_opened');
        this.setEventListeners();
    }

    close() {
        document.removeEventListener('keydown', this._handleEscClose);
        this._popupSelector.removeEventListener('click', this._clickClose);
        this._popupSelector.classList.remove('popup_opened');
    }
}