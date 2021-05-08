import { Seeder } from 'mongoose-data-seed'
import Role from '../src/models/Role'
import Resource from '../src/models/Resource';

class RolesSeeder extends Seeder {
  async beforeRun () {
    this.resources = await Resource.find({}).exec()
    this.ADMIN_USERS_RESOURCE = this.resources.find((resource) => resource?.name === 'ADMIN_USERS')
  }

  async shouldRun () {
    return Role.countDocuments().exec().then(count => count === 0)
  }

  async run () {
    const data = [{
      name: 'ADMIN',
      resources: [this.ADMIN_USERS_RESOURCE]
    }]

    return Role.create(data)
  }
}

export default RolesSeeder
