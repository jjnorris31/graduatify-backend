// @ts-ignore)
import mongoose, { Schema } from 'mongoose'

const permissionSchema = new Schema({
  name: String
})

const Permission = mongoose.model('Permission', permissionSchema)
export default Permission
