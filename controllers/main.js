import { Filme } from "../db/models/index";

const index = async (req, res) => {
    const filmes = await Filme.findAll();

    res.render("index", {
        filmes: filmes.map(filme => filme.toJSON())
    });
}

export default { index };