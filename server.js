const express = require('express');
//const apiroutes = require('./routes/apiroutes.js');
const htmlroutes = require("./routes/htmlroutes")

const PORT = process.env.port || 3001;

const app = express();



// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//app.use('/api', apiroutes);

app.use(express.static('public'));


// GET Route for homepage
app.use('/', htmlroutes)

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
