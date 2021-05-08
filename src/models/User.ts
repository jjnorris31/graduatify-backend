// @ts-ignore
import mongoose from 'mongoose'

const { Schema, model } = mongoose

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true
  },
  lastName: String,
  password: String,
  phoneNumber: String
})

export default model('User', userSchema)
