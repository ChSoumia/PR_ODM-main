var {Seeder} = require ('mongoose-data-seed');
var Patient = require ( '../models/patient');

const data = [
    {
        name: 'Juan',
        surname: 'Rodriguez',
        dni: '123123',
        city: "Madrid",
        profession: [
          "Frutero",
          "Monitor de tiempo libre"
        ],
        medicalHistory: [
          {
             "specialist": "Medico de cabecera",
             "diagnosis": "Resfriado",
             "date": "2017-04-04"
          },
          {
             "specialist": "Dermatólogo",
             "diagnosis": "Escorbuto",
             "date": "2016-11-14"
          }
        ]
    },
    {
        name: 'Andres',
        surname: 'Lopez',
        dni: '222333',
        city: "Cuenca",
        profession: [
          "Futbolista"
        ],
        medicalHistory: [
          {
             "specialist": "Medico de cabecera",
             "diagnosis": "Resaca",
             "date": "2018-11-14"
          },
          {
             "specialist": "Traumatologo",
             "diagnosis": "Fractura de ligamento cruzado",
             "date": "2015-05-14"
          },
          {
             "specialist": "Traumatologo",
             "diagnosis": "Esguince de tobillo",
             "date": "2016-04-24"
          }
        ]
    },
    {
        name: 'Carlos',
        surname: 'Lechon',
        dni: '333444',
        city: "Madrid",
        profession: [
          "Lechero",
          "Repartidor"
        ],
        medicalHistory: [
          {
             "specialist": "Reumatologo",
             "diagnosis": "Osteoporosis",
             "date": "2016-05-14"
          },
          {
             "specialist": "Medico de cabecera",
             "diagnosis": "Resfriado",
             "date": "2017-01-05"
          }
        ]
    },
    {
        name: 'Diana',
        surname: 'Pintor',
        dni: '555666',
        city: "Melilla",
        profession: [
          "Pintora",
          "Directora de subastas"
        ],
        medicalHistory: [
          {
             "specialist": "Medico de cabecera",
             "diagnosis": "Diarrea aguda",
             "date": "2016-05-14"
          },
          {
             "specialist": "Traumatologo",
             "diagnosis": "Síndrome del tunel carpiano",
             "date": "2019-03-15"
          }
        ]
    },
    {
        name: 'Raquel',
        surname: 'Dueñas',
        dni: '666777',
        city: "Barcelona",
        profession: [
          "Chef",
          "Ayudante de cocina",
          "Camarero"
        ],
        medicalHistory: [
          {
             "specialist": "Cardiologo",
             "diagnosis": "Arritmia",
             "date": "2019-03-26"
          },
          {
             "specialist": "Medico de cabecera",
             "diagnosis": "Dermatitis",
             "date": "2017-01-05"
          }
        ]
    },
    ,
    {
        name: 'Mario Alejandro',
        surname: 'Arcentales',
        dni: '777888',
        city: "Oviedo",
        profession: [
          "Minero"
        ],
        medicalHistory: [
          {
             "specialist": "Endocrino",
             "diagnosis": "Anemia crónica",
             "date": "2018-10-26"
          },
          {
             "specialist": "Neumologo",
             "diagnosis": "Silicosis",
             "date": "2019-10-05"
          }
        ]
    },
    {
        _id: '5e4a60fb7be8f229b54a16cb',
        name: 'Ana',
        surname: 'Durcal',
        dni: '555555',
        city: "Huelva",
        profession: [
            "Frutera",
            "Monitora de tiempo libre"
        ],
        medicalHistory: []
    },
];

class PatientsSeeder extends Seeder {
    async shouldRun() {
        const count = await Patient.countDocuments().exec();

        return count === 0;
    }

    async run() {
        return Patient.create(data);
    }
}
module.exports = PatientsSeeder;