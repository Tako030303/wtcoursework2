const express = require("express")
const path = require('path');

const apiRoutes = require('./routes/api/book');
const webRoutes = require('./routes/web/book');

const PORT = 3000
const app = express()
global.database = path.join(__dirname, './data/data.json')

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

app.use('/api', apiRoutes);
app.use('/', webRoutes);

app.listen(PORT, (req,res)=>{
    console.log("server is running")
})