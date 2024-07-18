// Cargamos los modelos para usarlos posteriormente
const Patient = require("../models/patient");

exports.list = async function () {
  // Busca en la base de datos todos los pacientes existentes en la colección "Paciente"
  try {
    console.log("entra en el método list");
    const patients = await Patient.find();
    console.log("patients: ", patients);
    return patients;
  } catch (error) {
    throw error;
  }
};

exports.read = async function (patientId) {
  // Busca en la colección "Paciente" el paciente cuyo id corresponde con el de patientId
  try {
    const patient = await Patient.findById(patientId);
    return patient;
  } catch (error) {
    throw error;
  }
};

exports.create = async function (body) {
  //Crea un nuevo paciente en la colección "Paciente" de Mongo
  try {
    console.log("Body: ", body);
    const newPatient = new Patient(body);
    const savedPatient = await newPatient.save();
    return savedPatient;
  } catch (error) {
    throw error;
  }
};

exports.update = async function (patientId, body) {
  //Actualiza los datos del paciente en la base datos
  try {
    const updatedPatient = await Patient.findByIdAndUpdate(patientId, body, {
      new: true,
    });
    console.log("Body: ", body);
    console.log("patientId: ", patientId);
  } catch (error) {
    throw error;
  }
};

exports.delete = async function (patientId) {
  //Elimina un paciente de la base dadtos
  try {
    const result = await Patient.findByIdAndDelete(patientId);
    return result;
  } catch (error) {
    throw error;
  }
};

exports.filterPatientsByCity = async function (city) {
  // Obtiene todos los pacientes de la base de datos de Mongo en base a su ciudad de origen
  try {
    const patients = await Patient.find({ city: city });
    return patients;
  } catch (error) {}
};

exports.filterPatientsByDiagnosis = async function (diagnosis) {
  //Obtiene todos los pacientes de la base de datos de Mongo en base a sus diagnósticos
  try {
    const patients = await Patient.find({
      "medicalHistory.diagnosis": diagnosis,
    });
    return patients;
  } catch (error) {
    throw error;
  }
};

exports.filterPatientsBySpeacialistAndDate = async function (
  specialist,
  sDate,
  fDate
) {
  //Obtiene todos los pacientes de la base de datos de Mongo en base al especialista y que la consulta se hiciese dentro de un rango de fechas
  try {
    const patients = await Patient.find({
      "medicalHistory.specialist": specialist,
      "medicalHistory.date": { $gte: new Date(sDate), $lte: new Date(fDate) },
    });
    return patients;
  } catch (error) {
    throw error;
  }
};

exports.addPatientHistory = async function (patientId, medicalRecord) {
  //agregar historia médica al paciente en la base de datos
  try {
    const updatePatient = await Patient.findByIdAndUpdate(
      patientId,
      { $push: { medicalHistory: medicalRecord } },
      { new: true }
    );
    return updatePatient;
  } catch (error) {
    throw error;
  }
};
