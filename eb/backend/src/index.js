const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
require('dotenv').config({ path: 'env' });

const app = express();
const port = process.env.PORT || 9000;
const URI = 'mongodb+srv://root:250997@cluster0.zrhyx.mongodb.net/?retryWrites=true&w=majority'

//iniciar servidor
app.get("/", (req,res) =>  {
         res.send("Servidor Listo")
});


//middlewares
app.use(cors());
app.use(express.json());

//conexion mongo
mongoose.set("strictQuery", true);
mongoose.connect(URI, {
         useNewUrlParser: true, 
         useUnifiedTopology: true 
}).then(()=> console.log("Conexión a mongo exitosa"))
.catch((error) => console.log(error));

//levantar servidor
app.listen(port,()=> console.log("servidor escuchando en el puerto", port));


//rutas
app.use('/incidents', require('./routes/incidents'))
app.use('/users', require('./routes/users'))