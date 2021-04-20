import {Card} from './components/Card.js';
import {FormValidator, validationConfig} from './components/FormValidator.js';
import {cardListSection, popupTypeImage, popupTypeTrash, imageFull, imageTitle,
    cardTemplate, cardTemplateWithoutTrash, cardElements, openPopupCard, popupCard, elementsContainer,
    profileElements, editProfileName, profileName, profileAvatar, editProfileOccupation,
    profileOccupation, popupProfile, openPopupProfile, popupCardContainer,
    popupProfileContainer} from './utils/constants.js';
import Section from './components/Section.js';
import PopupWithForm from './components/PopupWithForm.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithQuestion from './components/PopupWithQuestion.js';
import UserInfo from './components/UserInfo.js';
import Api from './components/Api';
import './pages/styles/index.css'; // импорт главного файла стилей

//Файл содержит только инициализацию необходимых главной странице модулей — функций и классов, а также содержит описание взаимодействия между классами

function handleCardClick(name, link) {
    const popupImage = new PopupWithImage(popupTypeImage);
    popupImage.open(name, link, imageFull, imageTitle);
}

const handleLikeClick = (id, classes) => {
    return new Promise(resolve => {
        if (classes.value === "element__like"){
            api.deleteLike(id)
                .then((data) => {
                    return data.likes.length;
                })
                .then(resolve)
                .catch((err) => {
                    console.log(err);
                });
        } else {
            api.setLike(id)
                .then((data) => {
                    return data.likes.length;
                })
                .then(resolve)
                .catch((err) => {
                    console.log(err);
                });
        }
    })
}

const handleTrashClick = (id) => {
    return new Promise(resolve => {
        const popupTrash = new PopupWithQuestion({
            popupSelector: popupTypeTrash,
            handleFormSubmit: () => {
                api.deleteCard(id)
                    .then((data) => {})
                    .then(resolve)
                    .catch((err) => {
                        console.log(err);
                    });
                popupTrash.close();
            }
        })
        popupTrash.open()
    })
}

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-22',
    headers: {
        authorization: '40274b77-9ffb-4125-a1bf-81ac7871106e',
        'Content-Type': 'application/json'
    }
});

let myId = null;
api.getUserInfo()
    .then((data) => {
        myId = data._id;
        user.setUserInfo(data.name, data.about, data.avatar, data._id);
    })
    .catch((err) => {
    console.log(err);
});

api.getInitialCards()
    .then((initialCards) => {
        const cardList = new Section({
                items: initialCards,
                renderer: (item) => {
                    if (item.owner._id === myId) {
                        const card = new Card(item.name, item.link, cardTemplate, handleCardClick, handleTrashClick, handleLikeClick, item.likes.length, item._id, myId);
                        const cardElement = card.generateCard();
                        cardList.addItem(cardElement);
                    } else {
                        const card = new Card(item.name, item.link, cardTemplateWithoutTrash, handleCardClick, handleTrashClick, handleLikeClick, item.likes.length, item._id);
                        const cardElement = card.generateCard();
                        cardList.addItem(cardElement);
                    }
                },
            },
            cardListSection
        );
        cardList.renderItems();
    })
    .catch((err) => {
    console.log(err);
});


function openAddCardPopup() {
    addCardFormValidator.hideInputErrors(cardElements);
    popupAddCard.open();
}

openPopupCard.addEventListener('click', openAddCardPopup);

//const popupImage = new PopupWithImage(popupTypeImage);

const popupAddCard = new PopupWithForm({
    popupSelector: popupCard,
    handleFormSubmit: (item) => {
        api.addNewCard(item.name, item.link)
            .then((data) => {
                const oneCard = new Card(data.name, data.link, cardTemplate, handleCardClick, handleTrashClick, handleLikeClick, data.likes.length, data._id, myId);
                elementsContainer.prepend(oneCard.generateCard());
            })
            .catch((err) => {
                console.log(err);
            });
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
        api.updateUserInfo(item.title, item.occupation)
            .then((data) => {
                //TODO
            })
            .catch((err) => {
                console.log(err);
            });
        popupTitle.close();
    }
});

const user = new UserInfo(profileName, profileOccupation, profileAvatar);

const addCardFormValidator = new FormValidator(validationConfig, popupCardContainer);
addCardFormValidator.enableValidation();

const editProfileValidator = new FormValidator(validationConfig, popupProfileContainer);
editProfileValidator.enableValidation();