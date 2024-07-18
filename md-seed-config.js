const mongoose = require("mongoose");
var Patients = require("./seeders/patients.seeder");
const mongoURL =
  process.env.MONGO_URL ||
  "mongodb+srv://Hospitalbbdd:BDwtDzxMZPNxYztb@cluster0.cl6z6nk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

/**
 * Seeders List
 * order is important
 * @type {Object}
 */
const seedersList = {
  Patients,
};
/**
 * Connect to mongodb implementation
 * @return {Promise}
 */

const connect = async () =>
  await mongoose.connect(mongoURL, { useNewUrlParser: true });
/**
 * Drop/Clear the database implementation
 * @return {Promise}
 */
const dropdb = async () => mongoose.connection.db.dropDatabase();
module.exports = { seedersList, connect, dropdb };
