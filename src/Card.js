import {keyHandler, elementsContainer} from './script.js'

const popupImage = document.querySelector('.popup_type_img');
const imageFull = document.querySelector('.popup__image');
const imageTitle = document.querySelector('.popup__name-place');
const popupCloseButton = popupImage.querySelector('.popup__close-button');

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

class Card {
    constructor (name, link, cardSelector) {
        this._name = name;
        this._link = link;
        this._cardSelector = cardSelector;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);

        return cardElement;
    }

    _handleOpenPopup() {
        imageFull.src = this._link;
        imageFull.alt = this._name;
        imageTitle.textContent = this._name;
        popupImage.classList.add('popup_opened');
        document.addEventListener('keydown', keyHandler);
    }

    _handleClosePopup() {
        popupImage.classList.remove('popup_opened');
    }

    _setEventListeners() {
        this._element.querySelector('.element__like').addEventListener('click', function (evt) {
            evt.target.classList.toggle('element__like_active');
        });
        this._element.querySelector('.element__trash').addEventListener('click', () => {
            this._element.remove();
        });
        this._element.querySelector('.element__photo').addEventListener('click', () => {
            this._handleOpenPopup();
        });
        popupCloseButton.addEventListener('click', () => {
            this._handleClosePopup();
        });
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector('.element__title').textContent = this._name;
        this._element.querySelector('.element__photo').src = this._link;

        return this._element;
    }
}

initialCards.forEach((item) => {
    const card = new Card(item.name, item.link, '#element-template');
    const cardElement = card.generateCard();
    elementsContainer.append(cardElement);
});

export {Card};