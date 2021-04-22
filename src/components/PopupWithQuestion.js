import Popup from './Popup.js';

export default class PopupWithQuestion extends Popup{
    constructor({popupElement, handleFormSubmit}) {
        super(popupElement);
        this._handleFormSubmit = handleFormSubmit;
        this._deleteCardSubmit = this._deleteCardSubmit.bind(this);
    }

    _deleteCardSubmit(evt) {
        evt.preventDefault();
        this._handleFormSubmit();
    }

    _setEventListeners() {
        super._setEventListeners();
        this._popupElement.querySelector('.popup__container')
            .addEventListener("submit", this._deleteCardSubmit);
    }

    close(){
        this._popupElement.querySelector('.popup__container')
            .removeEventListener("submit", this._deleteCardSubmit);
        this._popupElement.classList.remove('popup_opened');
        super.close();
    }
}