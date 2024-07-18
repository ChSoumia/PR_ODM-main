'use strict'
const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const PatientSchema = Schema({
    name: String,
    surname: String,
    dni: String, 
    city: String,
    profession: Array,
    medicalHistory: [{
    	specialist: String,
    	diagnosis: String,
    	date: Date,
    }]
});

module.exports = mongoose.model('Patient', PatientSchema);