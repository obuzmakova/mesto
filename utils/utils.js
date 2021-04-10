// const closeOnOverlay = (evt) => {
//     if (evt.target === evt.currentTarget) {
//         closePopup(evt.currentTarget);
//     }
// }
//
// const keyHandler = (evt) => {
//     if (evt.key === 'Escape') {
//         const targetPopup = document.querySelector('.popup_opened');
//         targetPopup.close();
//     }
// }
//
// const closePopupByCrossBtn = (popup) => {
//     popup.querySelector('.popup__close-button').addEventListener('click', () => {
//         closePopup(popup);
//     });
// }
//
// function openPopup(popup) {
//     popup.classList.add('popup_opened');
//     document.addEventListener('keydown', keyHandler);
//     popup.addEventListener('click', closeOnOverlay);
//     popup.addEventListener('click', closePopupByCrossBtn(popup));
// }
//
// function closePopup(popup) {
//     document.removeEventListener('keydown', keyHandler);
//     popup.removeEventListener('click', closeOnOverlay);
//     popup.removeEventListener('click', closePopupByCrossBtn(popup));
//     popup.classList.remove('popup_opened');
// }
//
// export {closeOnOverlay, openPopup, closePopup};