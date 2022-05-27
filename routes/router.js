import express from "express";

const router = express.Router();

// Main Controller
router.get("/", function(req, res) {
    res.render("index", {
        layout: false
    });
});

// Movie Controller
router.get("/sinopse/:titulo", function(req, res) {
    const { titulo } = req.params;
    res.render("sinopse", {
        titulo: titulo,
        layout: false
    });
});
router.get("/novo", function(req, res) {
    res.render("novo", {
        layout:false
    });
});
router.post("/novo", function(req, res) {
    res.render("novo", {
        layout:false
    });
});


export default router;