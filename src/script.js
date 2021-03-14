import {Card} from './Card.js'

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

export {keyHandler, elementsContainer};

