//???????? ?? ???????? ? ???????? ??????
import {closePopup} from "../utils/utils";

export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    setEventListeners() {
        this._element.querySelector('.popup__close-button').addEventListener('click', () => {
            this.close();
        });
    }

    open() {

    }

    close() {

    }
}