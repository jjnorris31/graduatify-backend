// @ts-ignore
import mongoose from 'mongoose'
import PermissionsSeeder from './seeders/permissions.seeder'
import ResourcesSeeder from './seeders/resources.seeder'
import RolesSeeder from './seeders/roles.seeder'
require('dotenv').config()
const mongoURL = process.env.MONGO_URI || 'mongodb://localhost:27017/dbname'

/**
 * Seeders List
 * order is important
 * @type {Object}
 */
export const seedersList = {
  PermissionsSeeder,
  ResourcesSeeder,
  RolesSeeder
}
/**
 * Connect to mongodb implementation
 * @return {Promise}
 */
export const connect = async () =>
  await mongoose.connect(mongoURL, { useNewUrlParser: true })
/**
 * Drop/Clear the database implementation
 * @return {Promise}
 */
export const dropdb = async () => mongoose.connection.db.dropDatabase()
