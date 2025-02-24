const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const post = require("./post");
const get = require("./get");
const put = require("./put");
const del = require("./delete");

app.use(bodyParser.json());
app.use(post);
app.use(get);
app.use(put);
app.use(del);

app.get('/', (req,res) => {
    res.send("Response is recived.");
})

const port = 1234;

app.listen(port, () =>{
    console.log(`Running on port http://localhost:${port}`);
})

