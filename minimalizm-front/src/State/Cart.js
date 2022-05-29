import { makeAutoObservable } from 'mobx'

export class Cart {
    inputValue = ''

    constructor() {
        makeAutoObservable(this)
    }

    setInputValue(text) {
        this.inputValue = text
    }
    getInputValue() {
        return this.inputValue
    }
}
