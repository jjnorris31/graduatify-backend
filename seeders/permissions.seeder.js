import { Seeder } from 'mongoose-data-seed'
import Permission from '../src/models/Permission.js'

const data = [
  { name: 'CREATE' },
  { name: 'READ' },
  { name: 'UPDATE' },
  { name: 'DELETE' }
];

class PermissionsSeeder extends Seeder {
  async shouldRun () {
    return Permission.countDocuments().exec().then(count => count === 0)
  }

  async run () {
    return Permission.create(data)
  }
}

export default PermissionsSeeder
