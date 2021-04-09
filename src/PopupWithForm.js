import Popup from "./Popup";

export default class PopupWithForm extends Popup{
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        debugger;
    }

    _getInputValues() {
        // this._inputList = this._element.querySelectorAll('.form__input');
        //
        // this._formValues = {};
        // this._inputList.forEach(input => this._formValues[input.name] = input.value);
        //
        // return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
    }

    close(){

    }
}