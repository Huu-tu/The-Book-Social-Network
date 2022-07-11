const express = require('express');
const { path } = require('path');
var cors = require('cors')

require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;
const route = require('./routes')

app.use(cors());
app.use(express.json())

route(app);

app.listen(port, () =>{
    console.log(`Server is listening at http://localhost:${port}`)
})