import Popup from './Popup.js';

export default class PopupWithQuestion extends Popup{
    constructor({popupSelector, handleFormSubmit}) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
    }

    _submit(evt) {
        evt.preventDefault();
        this._handleFormSubmit();
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupSelector.querySelector('.popup__container')
            .addEventListener('submit', this._submit);
    }

    close(){
        this._popupSelector.querySelector('.popup__container')
            .removeEventListener('submit', this._submit);
        this._popupSelector.classList.remove('popup_opened');
    }
}