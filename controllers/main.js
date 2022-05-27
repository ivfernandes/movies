const index = (req, res) => {
    res.render("index", {
        layout: false
    });
}

export default { index };