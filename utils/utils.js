const popupCard = document.querySelector('.popup_type_card');
const popupCardContainer = popupCard.querySelector('.popup__container_type_card');
const addCardName = popupCardContainer.querySelector('.popup__text_type_place');
const addCardLink = popupCardContainer.querySelector('.popup__text_type_link');
const submitCardButton = popupCard.querySelector('.popup__submit-btn');

const closeOnOverlay = (evt) => {
    if (evt.target === evt.currentTarget) {
        closePopup(evt.currentTarget);
    }
}

const keyHandler = (evt) => {
    if (evt.key === 'Escape') {
        const targetPopup = document.querySelector('.popup_opened');
        closePopup(targetPopup);
    }
}

function addCloseButtonListener(popup) {
    popup.querySelector('.popup__close-button').addEventListener('click', () => {
        closePopup(popup);
    });
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', keyHandler);
    popup.addEventListener('click', closeOnOverlay);
    addCloseButtonListener(popup);
}

function closePopup(popup) {
    if (addCardLink && addCardName) {
        addCardLink.value = '';
        addCardName.value = '';
        submitCardButton.classList.add('popup__submit-btn_inactive');
    }
    document.removeEventListener('keydown', keyHandler);
    document.removeEventListener('click', closeOnOverlay);
    popup.classList.remove('popup_opened');
}

export {openPopup, closePopup};