const lessonSchema = require('./module')

const createLesson = ({title, id, imagePath}) => new Promise((resolve , reject) =>{
    lessonSchema.create({
        title,
        id,
        imagePath
    })
    .then(data => resolve(data))
    .catch(err => reject(err))
})

const getAll = () => new Promise((res, rej) =>{
    lessonSchema.find({"active" : true}).exec()
    .then(data => res(data))
    .catch(err => rej(err))
})

const getLesson = (id) => new Promise((res, rej) => {
    lessonSchema.findOne({"active": true, "id": id})
    .exec().then(data => res(data))
    .catch(err => rej(err))
})

module.exports = {
    createLesson,
    getAll,
    getLesson
}