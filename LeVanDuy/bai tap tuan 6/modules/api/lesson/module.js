const mongoose = require('mongoose')

const Schema = mongoose.Schema

const lesson = new Schema({
    title: {type: String, required: true},
    active: {type: Boolean, default: true},
    id: {type: String, required: true},
    imagePath: {type: String, required: true}
}, {
    timestamps: true
})

module.exports = mongoose.model("lesson", lesson)