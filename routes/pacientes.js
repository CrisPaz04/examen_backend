const express = require("express");
const router = express.Router();

const pacientesController = require("../controllers/pacientesController");
router.get("/", pacientesController.list);
router.post("/", pacientesController.save);
router.delete("/:cod_paciente", pacientesController.delete);
router.get("/:cod_paciente", pacientesController.edit);
router.post("/:cod_paciente", pacientesController.update);

module.exports = router;
