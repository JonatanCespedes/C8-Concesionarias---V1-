let dataBase = require('../data/dataBase')

module.exports = {
    index: (req, res) => {
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write(`
        ****************************
        ----NUESTRAS SUCURSALES-----
        ****************************
        Empresa lider en el mercado.

        ____________________________
        
        `)

        dataBase.forEach(sucursal => {
            res.write(`
            ${sucursal.sucursal.toUpperCase()}
            --------------------
            Dirección: ${sucursal.direccion}
            Teléfono: ${sucursal.telefono}


            _____________________
            `)
        })

        res.end()
    },
    sucursal: (req, res) => {
        res.set({'content-type':'text/plain;charset=utf-8'})
        let paramsSucursal = req.params.sucursal.trim();

        let sucursalEncontrada = dataBase.find(sucursal => {
            return sucursal.sucursal.toLowerCase() === paramsSucursal.toLowerCase()
        })

        if (sucursalEncontrada !== undefined) {
            res.write(`
            ***********************
            ${sucursalEncontrada.sucursal.toUpperCase()}
            ***********************
            Dirección: ${sucursalEncontrada.direccion}
            Teléfono: ${sucursalEncontrada.telefono}
            Vehículos: ${sucursalEncontrada.autos.length}

            ______________________

            NUESTROS AUTOS
            --------------
            `)

            sucursalEncontrada.autos.forEach(auto => {
                res.write(`
                Marca: ${auto.marca}
                Modelo: ${auto.modelo}
                Año: ${auto.anio}
                Color: ${auto.color}
                `)
            })
        } else {
            res.write(`No encontramos la sucursal ${paramsSucursal}`);
        }
      
        res.end()
    }

}