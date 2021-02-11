let content = document.querySelector('.content');

let editButton = content.querySelector('.profile__edit-button');
let popupForm = document.querySelector('.popup');
let popupContainer = popupForm.querySelector('.popup__container');
let closeButton = popupContainer.querySelector('.popup__close-button');
let editName = popupContainer.querySelector('.popup__text_type_name');
let editOccupation = popupContainer.querySelector('.popup__text_type_occupation')
let name = content.querySelector('.profile__title');
let occupation = content.querySelector('.profile__subtitle');

let addCardButton = content.querySelector('.profile__add-button');
let popupCardForm = document.querySelector('.popup-card');
let popupCardContainer = popupCardForm.querySelector('.popup-card__container');
let closeCardButton = popupCardContainer.querySelector('.popup-card__close-button');

let elementsContainer = content.querySelector('.elements');

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

initialCards.forEach((item) => {
   const elementTemplate = document.querySelector('#element-template').content;
   const elementCard = elementTemplate.querySelector('.element').cloneNode(true);

   elementCard.querySelector('.element__photo').src = item.link;
   elementCard.querySelector('.element__title').textContent = item.name;

   elementsContainer.append(elementCard);
   console.log(elementsContainer);
});

function editOpen() {
    editName.value = name.textContent;
    editOccupation.value = occupation.textContent;
    popupForm.classList.add('popup_opened');
}

function closeForm() {
    popupForm.classList.remove('popup_opened');
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    // Эта строчка отменяет стандартную отправку формы..

    name.textContent = editName.value;
    occupation.textContent = editOccupation.value;
    closeForm();
}

function addCardOpen() {
    popupCardForm.classList.add('popup-card_opened');
}

function closeCardForm() {
    popupCardForm.classList.remove('popup-card_opened');
}

/*function handleCardFormSubmit(evt) {
    evt.preventDefault();

}*/

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
popupContainer.addEventListener('submit', handleFormSubmit);
editButton.addEventListener('click', editOpen);
closeButton.addEventListener('click', closeForm);

//popupCardContainer.addEventListener('submit', handleCardFormSubmit);
addCardButton.addEventListener('click', addCardOpen);
closeCardButton.addEventListener('click', closeCardForm);