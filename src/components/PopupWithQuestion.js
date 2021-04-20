import Popup from './Popup.js';

export default class PopupWithQuestion extends Popup{
    constructor({popupSelector, handleFormSubmit}) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
    }

    _deleteCardSubmit(evt) {
        evt.preventDefault();
        console.log("click");
        this._handleFormSubmit();
    }

    setEventListeners() {
        super.setEventListeners();
        console.log(this._popupSelector);
        this._popupSelector.querySelector('.popup__container_type_question')
            .addEventListener('submit', this._deleteCardSubmit);
    }

    close(){
        this._popupSelector.querySelector('.popup__container_type_question')
            .removeEventListener('submit', this._deleteCardSubmit);
        this._popupSelector.classList.remove('popup_opened');
    }
}