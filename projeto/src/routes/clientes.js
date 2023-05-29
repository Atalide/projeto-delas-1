const express = require ("express");
const controller = require ("../controllers/clientesController");

const router = express.Router();

router.get("/", controller.getAllClientes);
router.post("/", controller.createClientes);