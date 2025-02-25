const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const mymiddlewares = require("./logger")
const post = require("./post");
const get = require("./get");
const put = require("./put");
const del = require("./delete");

const port = 1234;


app.use(mymiddlewares.logger);
app.use(bodyParser.json());
app.use(post);
app.use(get);
app.use(put);
app.use(del);

app.get('/', (req,res) => {
    res.send("Response is recived.");
})

app.listen(port, () =>{
    console.log(`Running on port http://localhost:${port}`);
    console.log(mymiddlewares.logger);
})

