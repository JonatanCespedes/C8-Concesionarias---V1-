let express = require('express');
let router = express.Router();
let controller = require('../controllers/autosController')

/* GET - Lista todos los autos */
router.get('/', controller.index)
/* GET - Trae los autos segun la marca indicada */
router.get('/:marca', controller.marca)
/* GET - Trae los autos segun la marca indicada y a su vez filtrados por color o por año */
router.get('/:marca/:dato?', controller.dato)


module.exports = router;