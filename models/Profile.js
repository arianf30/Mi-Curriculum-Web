import mongoose from 'mongoose'
const { Schema } = mongoose

const profileSchema = new Schema({
  name: String,
  lastName: String,
  occupation: String,
  email: String,
  linkedin: String,
  github: String,
  instagram: String,
  phone: Number,
  avatar: String,
  about: Array,
  experience: Array,
  cvInfo: Object
})

profileSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
  }
})

mongoose.models = {}

const Profile = mongoose.model('profiles', profileSchema)

export default Profile
