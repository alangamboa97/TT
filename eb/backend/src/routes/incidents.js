const {Router} = require ('express');
const router = Router();

router.route('/')
.get((req,res) => res.send('Incidentes'));


router.route('/:id')
.get((req,res) => res.send('Incidencia datos'))
.put((req,res) => res.send('Incidencia confirmada'))
.delete((req,res)=> res.send('Incidencia descartada'))


module.exports= router;
