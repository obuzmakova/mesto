import {Card} from './components/Card.js';
import {FormValidator, validationConfig} from './components/FormValidator.js';
import {initialCards, cardListSection, popupTypeImage, imageFull, imageTitle,
    cardTemplate, cardElements, openPopupCard, popupCard, elementsContainer,
    profileElements, editProfileName, profileName, editProfileOccupation,
    profileOccupation, popupProfile, openPopupProfile, popupCardContainer,
    popupProfileContainer} from './utils/constants.js';
import Section from './components/Section.js';
import PopupWithForm from './components/PopupWithForm.js';
import PopupWithImage from './components/PopupWithImage.js';
import UserInfo from "./components/UserInfo.js";
import './pages/styles/index.css'; // импорт главного файла стилей

//Файл содержит только инициализацию необходимых главной странице модулей — функций и классов, а также содержит описание взаимодействия между классами

function handleCardClick(name, link) {
    const popupImage = new PopupWithImage(popupTypeImage);
    popupImage.open(name, link, imageFull, imageTitle);
}

const cardList = new Section({
    items: initialCards,
    renderer: (item) => {
        const card = new Card(item.name, item.link, cardTemplate, handleCardClick);
        const cardElement = card.generateCard();
        cardList.addItem(cardElement);
        },
    },
    cardListSection
);

cardList.renderItems();

function openAddCardPopup() {
    addCardFormValidator.hideInputErrors(cardElements);
    popupAddCard.open();
}

openPopupCard.addEventListener('click', openAddCardPopup);

const popupAddCard = new PopupWithForm({
    popupSelector: popupCard,
    handleFormSubmit: (item) => {
        const oneCard = new Card(item.name, item.link, cardTemplate, handleCardClick);
        elementsContainer.prepend(oneCard.generateCard());
        popupAddCard.close();
    }
});

function openEditProfilePopup() {
    editProfileValidator.hideInputErrors(profileElements);
    editProfileName.value = user.getUserInfo().returnName;
    editProfileOccupation.value = user.getUserInfo().returnOccupation;
    popupTitle.open();
}

openPopupProfile.addEventListener('click', openEditProfilePopup);

const popupTitle = new PopupWithForm({
    popupSelector: popupProfile,
    handleFormSubmit: (item) => {
        user.setUserInfo(item.title, item.occupation);
        popupTitle.close();
    }
});

const user = new UserInfo(profileName, profileOccupation);

const addCardFormValidator = new FormValidator(validationConfig, popupCardContainer);
addCardFormValidator.enableValidation();

const editProfileValidator = new FormValidator(validationConfig, popupProfileContainer);
editProfileValidator.enableValidation();