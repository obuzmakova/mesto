import {Card} from './Card.js';
import {FormValidator, validationConfig} from './FormValidator.js';
import {openPopup, closePopup} from '../utils/utils.js';
import {initialCards, cardListSection} from '../utils/constants.js';
import Section from './Section.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';

//Файл содержит только инициализацию необходимых главной странице модулей — функций и классов, а также содержит описание взаимодействия между классами

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
const submitCardButton = popupCard.querySelector('.popup__submit-btn');
const cardElements = Array.from(popupCard.querySelectorAll(".popup__text"));
const cardTemplate = document.querySelector('#element-template').content;
const popupTypeImage = document.querySelector('.popup_type_img');
const imageFull = document.querySelector('.popup__image');
const imageTitle = document.querySelector('.popup__name-place');

function handleCardClick(name, link) {
    // imageFull.src = this._link;
    // imageFull.alt = this._name;
    // imageTitle.textContent = this._name;
    const popupImage = new PopupWithImage(popupTypeImage);
    popupImage.open(name, link, imageFull, imageTitle);
}

const cardList = new Section({
    items: initialCards,
    renderer: (item) => {
        const card = new Card(item.name, item.link, cardTemplate, handleCardClick);

        const cardElement = card.generateCard();

        cardList.addItem(cardElement)
        },
    },
    cardListSection
);

cardList.renderItems();

function submitEditProfileForm (evt) {
    evt.preventDefault();

    popupTitle._getInputValues();
    profileName.textContent = editProfileName.value;
    profileOccupation.textContent = editProfileOccupation.value;
    closePopup(popupProfile);
}

function openEditProfilePopup() {
    editProfileValidator.hideInputErrors(profileElements);
    editProfileName.value = profileName.textContent;
    editProfileOccupation.value = profileOccupation.textContent;
    popupTitle.open();
}

openPopupProfile.addEventListener('click', openEditProfilePopup);

const popupTitle = new PopupWithForm(popupProfile, (evt => evt.preventDefault()));

const popupAddCard = new PopupWithForm(popupCard, handleCardFormSubmit);

const addCardFormValidator = new FormValidator(validationConfig, popupCardContainer);
addCardFormValidator.enableValidation();

const editProfileValidator = new FormValidator(validationConfig, popupProfileContainer);
editProfileValidator.enableValidation();

function createCard(name, link, cardSelector) {
    const newCard = new Card(name, link, cardSelector, handleCardClick);
    return newCard.generateCard();
}

function cleanCardPopupRows() {
    addCardLink.value = '';
    addCardName.value = '';
    submitCardButton.classList.add('popup__submit-btn_inactive');
}

function handleCardFormSubmit(evt) {
    evt.preventDefault();
    elementsContainer.prepend(createCard(addCardName.value, addCardLink.value, cardTemplate));
    cleanCardPopupRows();
    closePopup(popupCard);
}

popupCardContainer.addEventListener('submit', handleCardFormSubmit);
openPopupCard.addEventListener('click', evt => {
    cleanCardPopupRows();
    addCardFormValidator.hideInputErrors(cardElements);
    openPopup(popupCard);
});

//popupProfileContainer.addEventListener('submit', submitEditProfileForm);


export {openPopup};