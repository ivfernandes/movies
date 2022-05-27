const read = async (req, res) => {
    const { titulo } = req.params;
    res.render("sinopse", {
        titulo: titulo
    });
}

const create = async (req, res) => {
    res.render("novo");
}

export default { read, create };