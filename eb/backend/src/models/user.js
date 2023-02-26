const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
         nombre_Conductor:{
                  type:String,
                  required: false
         },
         apellido_Conductor:{
                  type:String,
                  required: false
         },
         numero_Incidencias:{
                  type: Number,
                  required: false
         }

})