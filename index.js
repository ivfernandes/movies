import express from "express";
import router from "./routes/router.js";
import { engine } from "express-handlebars";
import sass from "node-sass-middleware";

const PORT = 5432;
const app = express();

app.engine("handlebars", engine({
    helpers: require(`${__dirname}/views/helpers/helpers`),
    layoutsDir: `${__dirname}/views/layouts`,
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");
app.set("views", `${__dirname}/views`);

app.use(sass({
    src: `${__dirname}/public/scss`,
    dest: `${__dirname}/public/css`,
    outputStyle: "compressed",
    prefix: "/css"

}));
app.use("/css", express.static(`${__dirname}/public/css`));
app.use("/images", express.static(`${__dirname}/public/images`));
app.use("/webfonts", express.static(`${__dirname}/node_modules/@fortawesome/fontawesome-free/webfonts`));
app.use("/js", [
    express.static(`${__dirname}/node_modules/bootstrap/dist/js/`)
]);
app.use(express.urlencoded({ extended: false }));

app.use(router);

app.listen(PORT, () => {
    console.log(`Escutando na porta ${PORT}`);
});