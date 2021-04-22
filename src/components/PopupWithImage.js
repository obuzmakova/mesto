import Popup from './Popup.js';

export default class PopupWithImage extends Popup{
    constructor(popupElement) {
        super(popupElement);
        this._image = this._popupElement.querySelector('.popup__image');
        this._imageTitle = this._popupElement.querySelector('.popup__name-place');
    }

    open(name, link) {
        this._image.src = link;
        this._image.alt = name;
        this._imageTitle.textContent = name;
        super.open();
    }
}