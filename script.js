let content = document.querySelector('.content');
let popupForm = content.querySelector('.popup');
let editButton = content.querySelector('.profile__edit-button');

function editOpen() {
    popupForm.classList.add('popup_opened');
}

editButton.addEventListener('click', editOpen);

// Находим форму в DOM
/*let formElement = // Воспользуйтесь методом querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
    function handleFormSubmit (evt) {
        evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
        // Так мы можем определить свою логику отправки.
        // О том, как это делать, расскажем позже.

        // Находим поля формы в DOM
        let nameInput = // Воспользуйтесь инструментом .querySelector()
            let jobInput = // Воспользуйтесь инструментом .querySelector()

        // Получите значение полей из свойства value

        // Выберите элементы, куда должны быть вставлены значения полей

        // Вставьте новые значения с помощью textContent
    }

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit); */