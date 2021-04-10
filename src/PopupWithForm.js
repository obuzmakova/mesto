import Popup from './Popup.js';

export default class PopupWithForm extends Popup{
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
    }

    _getInputValues() {
        this._inputList = this._popupSelector.querySelectorAll('.form__input');

        this._formValues = {};
        this._inputList.forEach(input => this._formValues[input.name] = input.value);
        debugger;
        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();

    }

    close(){

    }
}