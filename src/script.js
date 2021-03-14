const content = document.querySelector('.content');
const elementsContainer = content.querySelector('.elements');
const popups = document.querySelectorAll('.popup');

const openPopupProfile = content.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_type_profile');
const popupProfileContainer = popupProfile.querySelector('.popup__container_type_profile');
const closeProfilePopup = popupProfile.querySelector('.popup__close-button');
const editProfileName = popupProfileContainer.querySelector('.popup__text_type_name');
const editProfileOccupation = popupProfileContainer.querySelector('.popup__text_type_occupation')
const profileName = content.querySelector('.profile__title');
const profileOccupation = content.querySelector('.profile__subtitle');

const openPopupCard = content.querySelector('.profile__add-button');
const popupCard = document.querySelector('.popup_type_card');
const popupCardContainer = popupCard.querySelector('.popup__container_type_card');
const closeCardPopup = popupCard.querySelector('.popup__close-button');
const addCardName = popupCardContainer.querySelector('.popup__text_type_place');
const addCardLink = popupCardContainer.querySelector('.popup__text_type_link');

const popupImage = document.querySelector('.popup_type_img');
const imageFull = document.querySelector('.popup__image');
const imageTitle = document.querySelector('.popup__name-place');
const closeImagePopup = popupImage.querySelector('.popup__close-button');

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
        popups.forEach((item) => {
            item.addEventListener('click', closeOnOverlay);
        });
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

const closeOnOverlay = (evt) => {
    if (evt.target === evt.currentTarget) {
        closePopup(evt.currentTarget);
    }
}

const keyHandler = (evt) => {
    const currPopup = document.querySelector('.popup_opened');
    if (evt.key === 'Escape') {
        closePopup(currPopup);
        document.removeEventListener('keydown', keyHandler);
    }
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', keyHandler);
    popups.forEach((item) => {
        item.addEventListener('click', closeOnOverlay);
    });
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

function handleCardFormSubmit(evt) {
    evt.preventDefault();
    const newCard = new Card(addCardName.value, addCardLink.value, '#element-template');
    const newCardElement = newCard.generateCard();
    elementsContainer.prepend(newCardElement);
    closePopup(popupCard);
    addCardLink.value = '';
    addCardName.value = '';
}

function editOpen() {
    const formElements = Array.from(popupProfile.querySelectorAll(".popup__text"));
    formElements.forEach((formElement) => {
        const errorElement = popupProfile.querySelector(`.${formElement.id}-error`);
        formElement.classList.remove('popup__text_type_error');
        errorElement.classList.remove('popup__text-error_active');
        errorElement.textContent = '';
    });
    editProfileName.value = profileName.textContent;
    editProfileOccupation.value = profileOccupation.textContent;
    openPopup(popupProfile);
}

function handleFormSubmit (evt) {
    evt.preventDefault();

    profileName.textContent = editProfileName.value;
    profileOccupation.textContent = editProfileOccupation.value;
    closePopup(popupProfile);
}

popups.forEach((item) => {
    item.addEventListener('click', closeOnOverlay);
});

popupCardContainer.addEventListener('submit', handleCardFormSubmit);
openPopupCard.addEventListener('click', evt => {
    openPopup(popupCard);
});
closeCardPopup.addEventListener('click', evt => {
    closePopup(popupCard);
});

popupProfileContainer.addEventListener('submit', handleFormSubmit);
openPopupProfile.addEventListener('click', editOpen);
closeProfilePopup.addEventListener('click', evt => {
    closePopup(popupProfile);
});

closeImagePopup.addEventListener('click', evt => {
    closePopup(popupImage);
});

