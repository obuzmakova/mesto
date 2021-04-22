import Popup from './Popup.js';

export default class PopupWithForm extends Popup{
    constructor({popupElement, handleFormSubmit}) {
        super(popupElement);
        this._handleFormSubmit = handleFormSubmit;
        this._submitInfo = this._submitInfo.bind(this);
    }

    _getInputValues() {
        this._inputList = this._popupElement.querySelectorAll('.popup__text');
        this._formValues = {};
        this._inputList.forEach(input => this._formValues[input.id] = input.value);
        return this._formValues;
    }

    _submitInfo(evt) {
        evt.preventDefault();
        this._handleFormSubmit(this._getInputValues());
    }

    _setEventListeners() {
        super._setEventListeners();
        this._popupElement.querySelector('.popup__container')
            .addEventListener('submit', this._submitInfo);
    }

    close(){
        this._popupElement.querySelector('.form').reset();
        this._popupElement.querySelector('.popup__container')
            .removeEventListener('submit', this._submitInfo);
        super.close();
    }
}