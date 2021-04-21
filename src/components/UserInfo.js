export default class UserInfo {
    constructor(name, occupation, avatar) {
        this._name = name;
        this._occupation = occupation;
        this._avatar = avatar;
    }

    getUserInfo() {
        return {
            returnName: this._name.textContent,
            returnOccupation: this._occupation.textContent
        }
    }

    setUserInfo(newName, newOccupation, newAvatar, newId) {
        this._name.textContent = newName;
        this._occupation.textContent = newOccupation;
        this._avatar.src = newAvatar;
        this._id = newId;
    }

    setUserTitle(newName, newOccupation) {
        this._name.textContent = newName;
        this._occupation.textContent = newOccupation;
    }

    setUserAvatar(newAvatar) {
        this._avatar.src = newAvatar;
    }
}