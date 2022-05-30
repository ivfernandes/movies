import express from "express";
import { route } from "express/lib/application";
import mainController from "../controllers/main.js";
import movieController from "../controllers/movie.js";

const router = express.Router();
const uploadUser = require("../middlewares/uploadImage");

// Main Controller
router.get("/", mainController.index);

// Movie Controller
router.get("/sinopse/:titulo", movieController.read);
router.get("/novo", movieController.create);
router.post("/novo/inserir", uploadUser.single("inputImagem"), movieController.insert);
router.get("/remove/:id", movieController.remove);
router.get("/update/:id", movieController.update);
router.post("/update/:id", movieController.update);

export default router;