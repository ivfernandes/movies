import { Filme } from "../db/models/index";

const index = async (req, res) => {
    const filmes = await Filme.findAll({
        order: [["updatedAt", "DESC"]]
    });

    res.render("index", {
        filmes: filmes.map(filme => filme.toJSON()),
        empty: !Boolean(filmes.length)
    });
}

export default { index };