import Popup from './Popup.js';

export default class PopupWithForm extends Popup{
    constructor({popupSelector, handleFormSubmit}) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._submitInfo = this._submitInfo.bind(this);
    }

    _getInputValues() {
        this._inputList = this._popupSelector.querySelectorAll('.popup__text');
        this._formValues = {};
        this._inputList.forEach(input => this._formValues[input.id] = input.value);
        return this._formValues;
    }

    _submitInfo(evt) {
        evt.preventDefault();
        this._handleFormSubmit(this._getInputValues());
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupSelector.querySelector('.popup__container')
            .addEventListener('submit', this._submitInfo);
    }

    close(){
        if (this._inputList) {
            this._inputList.forEach(item => item.value = '');
        }
        this._popupSelector.querySelector('.popup__submit-btn').classList.add('popup__submit-btn_inactive');
        this._popupSelector.querySelector('.popup__container')
            .removeEventListener('submit', this._submitInfo);
        super.close();
    }
}