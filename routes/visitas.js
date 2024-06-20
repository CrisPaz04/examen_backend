const express = require("express");
const router = express.Router();

const visitasController = require("../controllers/visitasController");
router.get("/", visitasController.list);
router.post("/", visitasController.save);
router.delete("/:num_visita", visitasController.delete);
router.get("/:num_visita", visitasController.edit);
router.post("/:num_visita", visitasController.update);

module.exports = router;
