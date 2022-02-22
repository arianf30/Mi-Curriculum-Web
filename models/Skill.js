import mongoose from 'mongoose'
const Schema = mongoose.Schema

const skill = new Schema({
  name: {
    type: String,
    required: true
  },
  order: {
    type: Number,
    required: true
  },
  skill: {
    type: String,
    required: true
  }
})

skill.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

mongoose.models = {}

const Skill = mongoose.model('skills', skill)

export default Skill
