let dataBase = require('../data/dataBase')

module.exports = {
    index: (req, res) => {
        let autos = [];

        dataBase.forEach(sucursal => {
            sucursal.autos.forEach(auto => {
                autos.push(auto)
            })
        });
        res.send(autos)
    },
    marca: (req, res) => {
        let paramsMarca = req.params.marca.trim(); //Capturo la marca solicitada
        
        let autos = [];

        dataBase.forEach(sucursal => {
            sucursal.autos.forEach(auto => {
               if(auto.marca.toLowerCase() === paramsMarca.toLowerCase()){
                   autos.push(auto)
               }
            })
        });

        res.send(autos)
    },
    dato: (req, res) => {
        let paramsMarca = req.params.marca.trim();
        let paramsDato = req.params.dato.trim();

        let autosFiltradosPorMarca = [];

        dataBase.forEach(sucursal => {
            sucursal.autos.forEach(auto => {
               if(auto.marca.toLowerCase() === paramsMarca.toLowerCase()){
                    autosFiltradosPorMarca.push(auto)
               }
            })
        });

        let autosFiltradosPorDato = autosFiltradosPorMarca.filter(auto => {
            return auto.anio == paramsDato || auto.color.toLowerCase() === paramsDato.toLowerCase() 
        })

        if(autosFiltradosPorDato.length > 0){
            res.send(autosFiltradosPorDato)
        }else {
            res.send("No hay datos que coincida con tu busqueda")
        }

    }
}