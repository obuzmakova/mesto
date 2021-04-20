import Popup from './Popup.js';

export default class PopupWithQuestion extends Popup{
    constructor({popupSelector, handleFormSubmit}) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
    }

    _deleteCardSubmit(evt) {
        evt.preventDefault();
        this._handleFormSubmit();
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupSelector.querySelector('.popup__container')
            .addEventListener("submit", this._deleteCardSubmit.bind(this));
    }

    close(){
        this._popupSelector.querySelector('.popup__container')
            .removeEventListener("submit", this._deleteCardSubmit);
        this._popupSelector.classList.remove('popup_opened');
        super.close();
    }
}