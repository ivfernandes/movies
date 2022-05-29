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
        const imagemUrl = req.body.inputImagemUrl.length === 0 ? null : req.body.inputImagemUrl;
        const imagem = req.body.imagem === undefined ? null : req.body.imagem;

        if (!imagemUrl && !imagem) {
            throw new Error("URL do cartaz ou Cartaz do filme devem ser preenchidos!");
        }

        await Filme.create({
            nome: req.body.inputTitulo,
            sinopse: req.body.inputSinopse,
            nota: req.body.inputNota,
            imagemUrl: req.body.inputImagemUrl,
            imagem: req.body.inputImagem
        });
        res.redirect("/");
    } catch (error) {
        res.render("novo", {
            mensagem: error.message
        })
    }
}

export default { read, create, insert };