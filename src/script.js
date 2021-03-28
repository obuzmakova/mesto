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
const cardTemplate = document.querySelector('#element-template').content;

function createCard(name, link, cardSelector) {
    const newCard = new Card(name, link, cardSelector);
    return newCard.generateCard();
}

function handleCardFormSubmit(evt) {
    evt.preventDefault();
    elementsContainer.prepend(createCard(addCardName.value, addCardLink.value, cardTemplate));
    closePopup(popupCard);
}

function openEditProfilePopup() {
    editProfileValidator.hideInputErrors(profileElements);
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
    addCardFormValidator.hideInputErrors(cardElements);
    openPopup(popupCard);
});

popupProfileContainer.addEventListener('submit', submitEditProfileForm);
openPopupProfile.addEventListener('click', openEditProfilePopup);

initialCards.forEach((item) => {
    elementsContainer.append(createCard(item.name, item.link, cardTemplate));
});

export {openPopup};