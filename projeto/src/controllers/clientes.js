const clientes = require("../models/clientes.js")

const getAllClientes = (req, res) => {
    clientes.find((err, clientes) => {
        res.status(200).json(clientes)
    })
};

const createEmpreendedoras = (req,res) => {
    let clientes = new clientes(req.body);

    const createlientes = (req,res) => {
        save((err) => {
        if(err) {
            res.status(500).send({mesage: `${err.mesage} - Falha ao cadastrar clientes`})
        } else {
            res.status(201).send(clientes.toJSON())
        }
    })
}

module.exports = {
    getAllCliente,
    createCliente
};