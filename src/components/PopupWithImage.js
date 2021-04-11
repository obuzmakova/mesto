import Popup from './Popup.js';

export default class PopupWithImage extends Popup{
    constructor(popupSelector) {
        super(popupSelector);
    }

    open(name, link, imageFull, imageTitle) {
        imageFull.src = link;
        imageFull.alt = name;
        imageTitle.textContent = name;
        super.open();
    }
}