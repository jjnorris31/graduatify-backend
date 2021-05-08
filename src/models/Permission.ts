// @ts-ignore
import mongoose, { Schema } from 'mongoose'

const permissionSchema = new Schema({
  name: String,
  resources: [{ type: Schema.Types.ObjectId, ref: 'Resource' }]
})

export default mongoose.model('Permission', permissionSchema)
