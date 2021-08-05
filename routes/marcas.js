let express = require('express');
let router = express.Router();
let controller = require('../controllers/marcasController')

/* GET - Lista todas las marcas*/
router.get('/', controller.index)
/* GET - Lista todas los autos de una marca*/
router.get('/:marca', controller.marca)


module.exports = router;