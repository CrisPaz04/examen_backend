const express = require("express");
const router = express.Router();

const medicosController = require("../controllers/medicosController");
router.get("/", medicosController.list);
router.post("/", medicosController.save);
router.delete("/:cod_doctor", medicosController.delete);
router.get("/:cod_doctor", medicosController.edit);
router.post("/:cod_doctor", medicosController.update);

module.exports = router;
