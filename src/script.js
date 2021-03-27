import {Card} from './Card.js';
//import {openPopup, closePopup} from '../utils/utils.js';

const content = document.querySelector('.content');
const elementsContainer = content.querySelector('.elements');
//const popups = document.querySelectorAll('.popup');

const openPopupProfile = content.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_type_profile');
const popupProfileContainer = popupProfile.querySelector('.popup__container_type_profile');
const editProfileName = popupProfileContainer.querySelector('.popup__text_type_name');
const editProfileOccupation = popupProfileContainer.querySelector('.popup__text_type_occupation')
const profileName = content.querySelector('.profile__title');
const profileOccupation = content.querySelector('.profile__subtitle');
const formElements = Array.from(popupProfile.querySelectorAll(".popup__text"));

const openPopupCard = content.querySelector('.profile__add-button');
const popupCard = document.querySelector('.popup_type_card');
const popupCardContainer = popupCard.querySelector('.popup__container_type_card');
const addCardName = popupCardContainer.querySelector('.popup__text_type_place');
const addCardLink = popupCardContainer.querySelector('.popup__text_type_link');
const submitCardButton = popupCard.querySelector('.popup__submit-btn');

const closeOnOverlay = (evt) => {
    if (evt.target === evt.currentTarget) {
        closePopup(evt.currentTarget);
    }
}

const keyHandler = (evt) => {
    if (evt.key === 'Escape') {
        const targetPopup = document.querySelector('.popup_opened');
        closePopup(targetPopup);
    }
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', keyHandler);
    popup.addEventListener('click', closeOnOverlay);
    popup.querySelector('.popup__close-button').addEventListener('click', () => {
        closePopup(popup);
    });
}

function closePopup(popup) {
    if (addCardLink && addCardName) {
        addCardLink.value = '';
        addCardName.value = '';
        submitCardButton.classList.add('popup__submit-btn_inactive');
    }
    document.removeEventListener('click', closeOnOverlay);
    document.removeEventListener('keydown', keyHandler);
    popup.classList.remove('popup_opened');
}

function handleCardFormSubmit(evt) {
    evt.preventDefault();
    const newCard = new Card(addCardName.value, addCardLink.value, '#element-template');
    const newCardElement = newCard.generateCard();
    elementsContainer.prepend(newCardElement);
    closePopup(popupCard);
}

function openEditProfilePopup() {
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

function submitEditProfileForm (evt) {
    evt.preventDefault();

    profileName.textContent = editProfileName.value;
    profileOccupation.textContent = editProfileOccupation.value;
    closePopup(popupProfile);
}

popupCardContainer.addEventListener('submit', handleCardFormSubmit);
openPopupCard.addEventListener('click', evt => {
    openPopup(popupCard);
});

popupProfileContainer.addEventListener('submit', submitEditProfileForm);
openPopupProfile.addEventListener('click', openEditProfilePopup);

initialCards.forEach((item) => {
    const card = new Card(item.name, item.link, '#element-template');
    const cardElement = card.generateCard();
    elementsContainer.append(cardElement);
});

export {openPopup};