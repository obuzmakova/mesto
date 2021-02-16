const content = document.querySelector('.content');
const elementTemplate = document.querySelector('#element-template').content;
const elementsContainer = content.querySelector('.elements');

const openPopupProfile = content.querySelector('.profile__edit-button');
const popupProfileForm = document.querySelector('.popup-profile');
const popupProfileContainer = popupProfileForm.querySelector('.popup-profile__container');
const closePopupProfile = popupProfileContainer.querySelector('.popup-profile__close-button');
const editProfileName = popupProfileContainer.querySelector('.popup-profile__text_type_name');
const editProfileOccupation = popupProfileContainer.querySelector('.popup-profile__text_type_occupation')
const profileName = content.querySelector('.profile__title');
const profileOccupation = content.querySelector('.profile__subtitle');

const openPopupCard = content.querySelector('.profile__add-button');
const popupCardForm = document.querySelector('.popup-card');
const popupCardContainer = popupCardForm.querySelector('.popup-card__container');
const closePopupCard = popupCardContainer.querySelector('.popup-card__close-button');
const addCardName = popupCardContainer.querySelector('.popup-card__text_type_name');
const addCardLink = popupCardContainer.querySelector('.popup-card__text_type_link');

const openPopupImage = document.querySelector('.popup-img');
const popupImageContainer = openPopupImage.querySelector('.popup-img__container');
const closePopupImage = popupImageContainer.querySelector('.popup-img__close-button');
const imageFull = popupImageContainer.querySelector('.popup-img__photo');
const imageTitle = popupImageContainer.querySelector('.popup-img__title');

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

function createItem(item) {
    const elementCard = elementTemplate.querySelector('.element').cloneNode(true);
    const elemImage = elementCard.querySelector('.element__photo');
    const elemName = elementCard.querySelector('.element__title');

    elemImage.src = item.link;
    elemName.textContent = item.name;
    elementCard.querySelector('.element__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__like_active');
    });
    elementCard.querySelector('.element__trash').addEventListener('click', function (evt) {
        elementCard.remove();
    });
    elemImage.addEventListener('click', function (evt) {
        imageFull.src = item.link;
        imageFull.alt = item.name;
        imageTitle.textContent = item.name;
        openPopupImage.classList.add('popup_opened');
    });

    return elementCard;
}

initialCards.forEach((item) => {
    elementsContainer.append(createItem(item));
});

function addCardOpen() {
    popupCardForm.classList.add('popup_opened');
}

function closeCardForm() {
    addCardLink.value = '';
    addCardName.value = '';
    popupCardForm.classList.remove('popup_opened');
}

function handleCardFormSubmit(evt) {
    evt.preventDefault();
    elementsContainer.prepend(createItem(addCardLink.value, addCardName.value)); //!!!
    closeCardForm();
}

function editOpen() {
    editProfileName.value = profileName.textContent;
    editProfileOccupation.value = profileOccupation.textContent;
    popupProfileForm.classList.add('popup_opened');
}

function closeForm() {
    popupProfileForm.classList.remove('popup_opened');
}

function handleFormSubmit (evt) {
    // Эта строчка отменяет стандартную отправку формы
    evt.preventDefault();

    profileName.textContent = editProfileName.value;
    profileOccupation.textContent = editProfileOccupation.value;
    closeForm();
}

function closeImage() {
    openPopupImage.classList.remove('popup_opened');
}

popupCardContainer.addEventListener('submit', handleCardFormSubmit);
openPopupCard.addEventListener('click', addCardOpen);
closePopupCard.addEventListener('click', closeCardForm);

popupProfileContainer.addEventListener('submit', handleFormSubmit);
openPopupProfile.addEventListener('click', editOpen);
closePopupProfile.addEventListener('click', closeForm);

closePopupImage.addEventListener('click', closeImage);