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
        if (newName)
            this._name.textContent = newName;
        if (newOccupation)
            this._occupation.textContent = newOccupation;
        if (newAvatar)
            this._avatar.src = newAvatar;
        if (newId)
            this._id = newId;
    }
}