//возвращает разметку карточки
import {handleLikeClick} from "../index";

class Card {
    constructor (name, link, cardSelector, handleCardClick, handleTrashClick, handleLikeClick, likes, id, owner) {
        this._name = name;
        this._link = link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._handleTrashClick = handleTrashClick;
        this._handleLikeClick = handleLikeClick;
        this._likes = likes;
        this._id = id;
        this._owner = owner;
    }

    _getTemplate() {
        const cardElement = this._cardSelector
            .querySelector('.element')
            .cloneNode(true);

        return cardElement;
    }

    _updateLikes(likes) {
        console.log(likes);
        this._element.querySelector('.element__counter').textContent = likes;
    }

    _setEventListeners() {
        this._element.querySelector('.element__like').addEventListener('click', (evt) => {
            this._handleLikeClick(this._id)
                .then((data) => {
                    this._updateLikes(data);
                });
            evt.target.classList.toggle('element__like_active');
        });
        if (this._owner) {
            this._element.querySelector('.element__trash').addEventListener('click', () => {
                this._handleTrashClick(this._id);
            });
        }
        this._photo.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link);
        });
    }

    generateCard() {
        this._element = this._getTemplate();
        this._photo = this._element.querySelector('.element__photo');
        this._setEventListeners();

        this._element.querySelector('.element__title').textContent = this._name;
        this._element.querySelector('.element__counter').textContent = this._likes;
        this._photo.src = this._link;
        this._photo.alt = this._name;

        return this._element;
    }
}

export {Card};