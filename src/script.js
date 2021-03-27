import {Card} from './Card.js';
import {FormValidator, validationConfig} from './FormValidator.js';
import {openPopup, closePopup} from '../utils/utils.js';

const content = document.querySelector('.content');
const elementsContainer = content.querySelector('.elements');

const openPopupProfile = content.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_type_profile');
const popupProfileContainer = popupProfile.querySelector('.popup__container_type_profile');
const editProfileName = popupProfileContainer.querySelector('.popup__text_type_name');
const editProfileOccupation = popupProfileContainer.querySelector('.popup__text_type_occupation')
const profileName = content.querySelector('.profile__title');
const profileOccupation = content.querySelector('.profile__subtitle');
const profileElements = Array.from(popupProfile.querySelectorAll(".popup__text"));

const openPopupCard = content.querySelector('.profile__add-button');
const popupCard = document.querySelector('.popup_type_card');
const popupCardContainer = popupCard.querySelector('.popup__container_type_card');
const addCardName = popupCardContainer.querySelector('.popup__text_type_place');
const addCardLink = popupCardContainer.querySelector('.popup__text_type_link');
const cardElements = Array.from(popupCard.querySelectorAll(".popup__text"));

function handleCardFormSubmit(evt) {
    evt.preventDefault();
    const newCard = new Card(addCardName.value, addCardLink.value, '#element-template');
    const newCardElement = newCard.generateCard();
    elementsContainer.prepend(newCardElement);
    closePopup(popupCard);
}

function openEditProfilePopup() {
    profileElements.forEach((profileElement) => {
        editProfileValidator.hideInputError(profileElement);
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

const addCardFormValidator = new FormValidator(validationConfig, popupCardContainer);
addCardFormValidator.enableValidation();

const editProfileValidator = new FormValidator(validationConfig, popupProfileContainer);
editProfileValidator.enableValidation();

popupCardContainer.addEventListener('submit', handleCardFormSubmit);
openPopupCard.addEventListener('click', evt => {
    cardElements.forEach((cardElement) => {
        addCardFormValidator.hideInputError(cardElement);
    });
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