const express = require('express');
const bodyParser = require('body-parser')
const userRoute = require('./routes/userRoute');


const app = express();
const port = 8080;
app.use(bodyParser.urlencoded({ extended: false }))

userRoute(app);

app.get("/", (req, res) => {
    res.send("Olá mundo pelo Express");
})

app.listen(port, () => console.log("App rodando na porta " + port));