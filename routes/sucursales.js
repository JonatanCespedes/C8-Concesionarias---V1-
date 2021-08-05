let express = require('express');
let router = express.Router();
let controller = require('../controllers/sucursalesController')

/* GET - Lista todas las sucursales*/
router.get('/', controller.index);
/* GET - Muestra datos de la sucursal elegida */
router.get('/:sucursal', controller.sucursal)



module.exports = router;