import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}
        this._userPro = []
        this._idCategory = {}
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
        this._user = user
    }
    setUserPro(userPro) {
        this._userPro = userPro
    }
    setIdCategory(idCategory) {
        this._idCategory = idCategory
    }
    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }
    get userPro() {
        return this._userPro
    }
    get idCategory() {
        return this._idCategory
    }
}

