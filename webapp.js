const express = require('express');
const app = express();

const controller = require('./route');

// console.log(controller.toString());

controller(app);

app.listen(3000, () => console.log('Example app listening on port 3000!'));