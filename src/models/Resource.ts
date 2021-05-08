// @ts-ignore
import mongoose, { Schema } from 'mongoose'

const resourceSchema = new Schema({
  name: String,
  permissions: [{ type: Schema.Types.ObjectId, ref: 'Permission' }]
})

export default mongoose.model('Resource', resourceSchema)
