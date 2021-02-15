let content = document.querySelector('.content');
let elementsContainer = content.querySelector('.elements');

let openPopupProfile = content.querySelector('.profile__edit-button');
let popupProfileForm = document.querySelector('.popup-profile');
let popupProfileContainer = popupProfileForm.querySelector('.popup-profile__container');
let closePopupProfile = popupProfileContainer.querySelector('.popup-profile__close-button');
let editProfileName = popupProfileContainer.querySelector('.popup-profile__text_type_name');
let editProfileOccupation = popupProfileContainer.querySelector('.popup-profile__text_type_occupation')
let profileName = content.querySelector('.profile__title');
let profileOccupation = content.querySelector('.profile__subtitle');

let openPopupCard = content.querySelector('.profile__add-button');
let popupCardForm = document.querySelector('.popup-card');
let popupCardContainer = popupCardForm.querySelector('.popup-card__container');
let closePopupCard = popupCardContainer.querySelector('.popup-card__close-button');
let addCardName = popupCardContainer.querySelector('.popup-card__text_type_name');
let addCardLink = popupCardContainer.querySelector('.popup-card__text_type_link');

let openPopupImage = document.querySelector('.popup-img');
let popupImageContainer = openPopupImage.querySelector('.popup-img__container');
let closePopupImage = popupImageContainer.querySelector('.popup-img__close-button');
let imageFull = popupImageContainer.querySelector('.popup-img__photo');
let imageTitle = popupImageContainer.querySelector('.popup-img__title');

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

function addItem(link, name) {
    const elementTemplate = document.querySelector('#element-template').content;
    const elementCard = elementTemplate.querySelector('.element').cloneNode(true);
    const elemImage = elementCard.querySelector('.element__photo');
    const elemName = elementCard.querySelector('.element__title');

    elemImage.src = link;
    elemName.textContent = name;
    elementCard.querySelector('.element__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__like_active');
    });
    elementCard.querySelector('.element__trash').addEventListener('click', function (evt) {
        elementCard.remove();
    });
    elemImage.addEventListener('click', function (evt) {
        imageFull.src = link;
        imageTitle.textContent = name;
        openPopupImage.classList.add('popup-img_opened');
    });

    return elementCard;
}

initialCards.forEach((item) => {
    elementsContainer.append(addItem(item.link, item.name));
});

function addCardOpen() {
    popupCardForm.classList.add('popup-card_opened');
}

function closeCardForm() {
    addCardLink.value = '';
    addCardName.value = '';
    popupCardForm.classList.remove('popup-card_opened');
}

function handleCardFormSubmit(evt) {
    evt.preventDefault();
    elementsContainer.prepend(addItem(addCardLink.value, addCardName.value));
    closeCardForm();
}

function editOpen() {
    editProfileName.value = profileName.textContent;
    editProfileOccupation.value = profileOccupation.textContent;
    popupProfileForm.classList.add('popup-profile_opened');
}

function closeForm() {
    popupProfileForm.classList.remove('popup-profile_opened');
}

function handleFormSubmit (evt) {
    // Эта строчка отменяет стандартную отправку формы
    evt.preventDefault();

    profileName.textContent = editProfileName.value;
    profileOccupation.textContent = editProfileOccupation.value;
    closeForm();
}

function closeImage() {
    openPopupImage.classList.remove('popup-img_opened');
}

popupCardContainer.addEventListener('submit', handleCardFormSubmit);
openPopupCard.addEventListener('click', addCardOpen);
closePopupCard.addEventListener('click', closeCardForm);

popupProfileContainer.addEventListener('submit', handleFormSubmit);
openPopupProfile.addEventListener('click', editOpen);
closePopupProfile.addEventListener('click', closeForm);

closePopupImage.addEventListener('click', closeImage);