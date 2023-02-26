const mongoose =  require('mongoose');

const incidentSchema = mongoose.Schema({
         id_Conductor:{
                  type: String,
                  required: false
         },
         nombre_Conductor:{
                  type: String,
                  required : false
         },
         apellido_Conductor:{
                  type: String,
                  required: false

         },
         fecha:{
                  type: Date,
                  required: false
         },
         hora:{
                  type: String,
                  required: false
         },
         Estado_Incidencia:{
                  type: Boolean,
                  required: false
         },
         Detalles:{
                  ubicacion:{
                           type: String,
                           required: false
                  },
                  Video:{
                           type: String,
                           required: false
                  }
         }

});