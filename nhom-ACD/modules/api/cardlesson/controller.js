const lessonSchema = require('./module')

const createCard = ({title, idLesson, imagePath}) => new Promise((resolve , reject) =>{
    lessonSchema.create({
        title,
        idLesson,
        imagePath
    }).then(data => resolve(data))
    .catch(err => reject(err))
})

const getAll = () => new Promise((res, rej) =>{
    lessonSchema.find({"active" : true}).exec()
    .then(data => res(data))
    .catch(err => rej(err))
})

const getCard = (idLesson) => new Promise((res, rej) => {
    lessonSchema.find({"active": true, "idLesson": idLesson})
    .exec().then(data => res(data))
    .catch(err => rej(err))
})

const leant = (id) => new Promise((res, rej) => {
    lessonSchema.update({_id : id}, {
        active : false
    }).then(data => res(data))
    .catch(err => rej(err)) 
})

module.exports = {
    createCard,
    getAll,
    getCard,
    leant
}