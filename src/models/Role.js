// @ts-ignore
import mongoose, { Schema } from 'mongoose'

const roleSchema = new Schema({
  id: String,
  name: String
})

export default mongoose.model('Role', roleSchema)
