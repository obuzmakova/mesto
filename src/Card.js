import {openPopup} from '../utils/utils.js';

const popupImage = document.querySelector('.popup_type_img');
const imageFull = document.querySelector('.popup__image');
const imageTitle = document.querySelector('.popup__name-place');

class Card {
    constructor (name, link, cardSelector) {
        this._name = name;
        this._link = link;
        this._cardSelector = cardSelector;
    }

    _getTemplate() {
        const cardElement = this._cardSelector
            .querySelector('.element')
            .cloneNode(true);

        return cardElement;
    }

    _handleOpenPopup() {
        imageFull.src = this._link;
        imageFull.alt = this._name;
        imageTitle.textContent = this._name;
        openPopup(popupImage);
    }

    _setEventListeners() {
        this._element.querySelector('.element__like').addEventListener('click', function (evt) {
            evt.target.classList.toggle('element__like_active');
        });
        this._element.querySelector('.element__trash').addEventListener('click', () => {
            this._element.remove();
        });
        this._photo.addEventListener('click', () => {
            this._handleOpenPopup();
        });
    }

    generateCard() {
        this._element = this._getTemplate();
        this._photo = this._element.querySelector('.element__photo');
        this._setEventListeners();

        this._element.querySelector('.element__title').textContent = this._name;
        this._photo.src = this._link;
        this._photo.alt = this._name;

        return this._element;
    }
}

export {Card};