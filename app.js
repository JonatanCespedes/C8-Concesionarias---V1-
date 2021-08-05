let express = require('express');
let app = express();

/* Enrutadores */
let homeRouter = require('./routes/home');
let autosRouter = require('./routes/autos');
let marcasRouter = require('./routes/marcas');
let sucursalesRouter = require('./routes/sucursales')

/* RUTAS */
app.use('/', homeRouter);
app.use('/sucursales', sucursalesRouter);
app.use('/marcas', marcasRouter);
app.use('/autos', autosRouter)

app.listen(3000, () => console.log("Servidor levantado"));