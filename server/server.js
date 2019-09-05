const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3007;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


app.listen(port, () => console.log(`App listening on port: ${port}`));