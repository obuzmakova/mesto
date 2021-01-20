let content = document.querySelector('.content');
let editButton = content.querySelector('.profile__edit-button');
let popupForm = content.querySelector('.popup');
let popupContainer = popupForm.querySelector('.popup__container');
let closeButton = popupContainer.querySelector('.popup__close-button');
let editName = popupContainer.querySelector('.popup__text_type_name');
let editOccupation = popupContainer.querySelector('.popup__text_type_occupation')
let name = content.querySelector('.profile__title');
let occupation = content.querySelector('.profile__subtitle');

/*editName.setAttribute('value', `${name.textContent}`);
editOccupation.setAttribute('value', `${occupation.textContent}`);*/

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

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
popupContainer.addEventListener('submit', handleFormSubmit);
editButton.addEventListener('click', editOpen);
closeButton.addEventListener('click', closeForm);