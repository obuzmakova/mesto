export const cardListSection = '.elements';
export const content = document.querySelector('.content');
export const elementsContainer = content.querySelector('.elements');

export const openPopupProfile = content.querySelector('.profile__edit-button');
export const popupProfile = document.querySelector('.popup_type_profile');
export const popupProfileContainer = popupProfile.querySelector('.popup__container_type_profile');
export const editProfileName = popupProfileContainer.querySelector('.popup__text_type_name');
export const editProfileOccupation = popupProfileContainer.querySelector('.popup__text_type_occupation')
export const profileName = content.querySelector('.profile__title');
export const profileOccupation = content.querySelector('.profile__subtitle');
export const profileAvatar = content.querySelector('.profile__avatar');
export const profileElements = Array.from(popupProfile.querySelectorAll(".popup__text"));

export const openPopupCard = content.querySelector('.profile__add-button');
export const popupCard = document.querySelector('.popup_type_card');
export const popupCardContainer = popupCard.querySelector('.popup__container_type_card');
export const cardElements = Array.from(popupCard.querySelectorAll(".popup__text"));
export const cardTemplate = document.querySelector('#element-template').content;
export const popupTypeImage = document.querySelector('.popup_type_img');
export const imageFull = document.querySelector('.popup__image');
export const imageTitle = document.querySelector('.popup__name-place');