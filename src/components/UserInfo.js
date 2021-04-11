export default class UserInfo {
    constructor(name, occupation) {
        this._name = name;
        this._occupation = occupation;
    }

    getUserInfo() {
        return {
            returnName: this._name.textContent,
            returnOccupation: this._occupation.textContent
        }
    }

    setUserInfo(newName, newOccupation) {
        this._name.textContent = newName;
        this._occupation.textContent = newOccupation;
    }
}