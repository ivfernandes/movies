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

const update = async (req, res) => {
    const filme = await Filme.findOne({ where: { id: req.params.id }});
    if (req.route.methods.get) {
        res.render("update", {
            filme: filme.toJSON()
        });
    } else if (req.route.methods.post) {
        try {
            await Filme.update({
                nome: req.body.inputTitulo,
                sinopse: req.body.inputSinopse,
                nota: req.body.inputNota
            }, { where: { id: req.params.id }});
            res.redirect(`/sinopse/${req.body.inputTitulo}`);
        } catch (error) {
            res.send(error);
        }        
    }
}

const remove = async (req, res) => {
    const { id } = req.params;
    try {
        await Filme.destroy({ where: { id: id }});
        res.redirect("/");
    } catch (error) {
        res.status(500).send(error);
    }
}

export default { read, create, insert, remove, update };