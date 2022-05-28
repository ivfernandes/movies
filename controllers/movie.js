const models = require("../db/models/index");
const Filme = models.Filme;

const read = async (req, res) => {
    const { titulo } = req.params;
    res.render("sinopse", {
        titulo: titulo
    });
}

const create = (req, res) => {
    res.render("novo");
}

const insert = async (req, res) => {
    try {
        await Filme.create({
            nome: req.body.inputTitulo,
            sinopse: req.body.inputSinopse,
            nota: req.body.inputNota,
            imagemUrl: req.body.inputImagemUrl,
            imagem: req.body.inputImagem
        });
        res.redirect("/");
    } catch (error) {
        console.log(error);
        res.render("novo", { curso: req.body, error})
    }
}

export default { read, create, insert };