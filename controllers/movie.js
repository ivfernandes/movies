import { Filme } from "../db/models/index";

const read = async (req, res) => {
    const { titulo } = req.params;
    const filme = await Filme.findOne({ where: { nome: titulo }});
    res.render("sinopse", {
        filme : filme.toJSON()
    });
}

const create = (req, res) => {
    res.render("novo");
}

const insert = async (req, res) => {
    try {
        const imagemUrl = req.body.inputImagemUrl === undefined || req.body.inputImagemUrl.length === 0 ? null : req.body.inputImagemUrl;

        if (!imagemUrl && !req.file) {
            throw new Error("URL do cartaz ou Cartaz do filme devem ser preenchidos!");
        }
        const imagem = req.file ? req.file.filename : null;
        await Filme.create({
            nome: req.body.inputTitulo,
            sinopse: req.body.inputSinopse,
            nota: req.body.inputNota,
            imagemUrl: imagemUrl,
            imagem: imagem
        });
        res.redirect("/");
    } catch (error) {
        res.render("novo", {
            mensagem: error.message
        })
    }
}

export default { read, create, insert };