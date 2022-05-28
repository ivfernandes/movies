import express from "express";
import mainController from "../controllers/main.js";
import movieController from "../controllers/movie.js";

const router = express.Router();

// Main Controller
router.get("/", mainController.index);

// Movie Controller
router.get("/sinopse/:titulo", movieController.read);
router.get("/novo", movieController.create);
router.post("/novo/inserir", movieController.insert);

export default router;