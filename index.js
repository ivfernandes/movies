import express from "express";
import router from "./routes/router.js";
import { engine } from "express-handlebars";
import sass from "node-sass-middleware";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log(__dirname);

const PORT = 5555;
const app = express();

app.engine("handlebars", engine({
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
app.use("/js", [
    express.static(`${__dirname}/node_modules/bootstrap/dist/js/`)
]);
app.use(express.urlencoded({ extended: false }));

app.use(router);

app.listen(PORT, () => {
    console.log(`Escutando na porta ${PORT}`);
});