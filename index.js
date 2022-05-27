import express from "express";
import router from "./routes/router.js";
import { engine } from "express-handlebars";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log(__dirname);

const PORT = 5555;
const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", `${__dirname}/views`);

app.use(router);

app.listen(PORT, () => {
    console.log(`Escutando na porta ${PORT}`);
});