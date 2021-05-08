import { Seeder } from 'mongoose-data-seed'
import Resource from '../src/models/Resource'
import Permission from '../src/models/Permission'

class ResourcesSeeder extends Seeder {
  async beforeRun () {
    this.permissions = await Permission.find({}).exec()
    this.CREATE_PERMISSION_ID = this.permissions.find((permission) => permission?.name === 'CREATE')
    this.READ_PERMISSION_ID = this.permissions.find((permission) => permission?.name === 'READ')
    this.UPDATE_PERMISSION_ID = this.permissions.find((permission) => permission?.name === 'UPDATE')
    this.DELETE_PERMISSION_ID = this.permissions.find((permission) => permission?.name === 'DELETE')
  }

  async shouldRun () {
    return Resource.countDocuments().exec().then(count => count === 0)
  }

  async run () {
    const data = [{
      name: 'ADMIN_USERS',
      permissions: [this.CREATE_PERMISSION_ID, this.READ_PERMISSION_ID, this.UPDATE_PERMISSION_ID, this.DELETE_PERMISSION_ID]
    }]

    return Resource.create(data)
  }
}

export default ResourcesSeeder
