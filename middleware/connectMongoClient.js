import mongoose from 'mongoose'

export default async function connectMongoClient (callback) {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return callback
  }
  // Use new db connection
  await mongoose.connect(process.env.mongodburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000
  })
  return callback
}
