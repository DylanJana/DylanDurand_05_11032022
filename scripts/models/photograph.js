class Photograph {
    constructor(photographers) {
        this._name = photographers.name
        this._location = photographers.city + ", " + photographers.country
        this._tagline = photographers.tagline
        this._portrait = photographers.portrait
        this._id = photographers.id
    }

    get name() {
        return this._name
    }

    get tagline() {
        return this._tagline
    }

    get portrait() {
        return `/assets/photographers/${this._portrait}`
    }

    get location() {
        return this._location
    }

    get id() {
        return this._id
    }
}