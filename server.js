const express = require('express');
const bodyParser = require('body-parser');

var morgan = require('morgan');
const app = express();
var cors = require('cors');

//parse aplication/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());


//pangiil routes
var routes = require('./routes');
routes(app);




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server runing on PORT ${PORT}`));