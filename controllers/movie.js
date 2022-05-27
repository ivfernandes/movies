const read = async (req, res) => {
    const { titulo } = req.params;
    res.render("sinopse", {
        titulo: titulo,
        layout: false
    });
}

const create = async (req, res) => {
    res.render("novo", {
        layout:false
    });
}

export default { read, create };