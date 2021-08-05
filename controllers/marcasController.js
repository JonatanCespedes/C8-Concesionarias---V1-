let dataBase = require('../data/dataBase');

module.exports = {
    index: (req, res) => {
        let marcas = [];
        dataBase.forEach(sucursal => {
            sucursal.autos.forEach(auto => {
                if(!marcas.includes(auto.marca)){
                    marcas.push(auto.marca)
                }
            })
        });
        res.send(marcas)   
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
    }
}