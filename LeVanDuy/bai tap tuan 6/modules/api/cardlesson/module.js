const mongoose = require('mongoose')

const Schema = mongoose.Schema

const cardLesson = new Schema({
    title: {type: String, required: true},
    active: {type: Boolean, default: true},
    idLesson: {type: String, required: true},
    imagePath: {type: String, required: true}
}, {
    timestamps: true
})

module.exports = mongoose.model("Cardlesson", cardLesson)