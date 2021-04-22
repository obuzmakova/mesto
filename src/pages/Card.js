//возвращает разметку карточки
class Card {
    constructor (name, link, cardSelector, handleCardClick, handleTrashClick, handleLikeClick, likes, id, owner, itemOwner) {
        this._name = name;
        this._link = link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._handleTrashClick = handleTrashClick;
        this._handleLikeClick = handleLikeClick;
        this._likes = likes.length;
        this._likesNames = likes;
        this._id = id;
        this._owner = owner;
        this._itemOwner = itemOwner;
    }

    _getTemplate() {
        const cardElement = this._cardSelector
            .querySelector('.element')
            .cloneNode(true);

        return cardElement;
    }

    _updateLikes(likes) {
        this._element.querySelector('.element__counter').textContent = likes;
    }

    _setEventListeners() {
        this._element.querySelector('.element__like').addEventListener('click', (evt) => {
            evt.target.classList.toggle('element__like_active');
            this._handleLikeClick(this._id, evt.target.classList)
                .then((data) => {
                    this._updateLikes(data);
                });
        });
        if (this._itemOwner) {
            this._element.querySelector('.element__trash').addEventListener('click', () => {
                this._handleTrashClick(this._id)
                    .then(() => {
                        this._element.remove();
                    })
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
        if (Array.isArray(this._likesNames)) {
            this._likesNames.forEach((item) => {
                if (item._id === this._owner) {
                    this._element.querySelector('.element__like').classList.toggle('element__like_active');
                }
            })
        } else {
            if (this._likesNames._id === this._owner) {
                    this._element.querySelector('.element__like').classList.toggle('element__like_active');
                }
        }
        this._photo.src = this._link;
        this._photo.alt = this._name;

        return this._element;
    }
}

export {Card};