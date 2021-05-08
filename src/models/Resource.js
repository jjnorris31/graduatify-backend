// @ts-ignore
import mongoose, { Schema } from 'mongoose'

const resourceSchema = new Schema({
  name: String,
  permissions: [{ type: Schema.Types.ObjectId, ref: 'Permission' }]
})

resourceSchema.methods = {
  addPermission ({ permission: { _id: permission } }) {
    this.permissions.push({
      permission
    })
    return this.save()
  }
}

export default mongoose.model('Resource', resourceSchema)
