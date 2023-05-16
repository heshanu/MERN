const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 3000;
const request = require('request');
const cors=require('cors');

//middlewares
// other app.use() options ...
app.use(cors());

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: true }));

//get data api and parse to movies.ejs
app.get('/results', (req, res)=> {

    let query = req.query.search;

    request('https://api.themoviedb.org/3/search/movie?api_key=19ad416db5f018cc8b2482a686deb0e4&query='+query, (error, response, body) => {
        if(error) {
            console.log(error);
        }

        let data = JSON.parse(body);
        res.render('movies', {data:data, searchQuery:query});

    });

});

app.get('/search', (req, res) => {
    res.render('search');
})

/*
app.get('/about', (req, res) => {
    res.render('about');
})*/

/*
app.get('/user/:id/:username', (req, res) => {
    let userId = req.params.id;
    let username = req.params.username;
    res.render('user', { id: userId, username: username });
})
*/
/*
app.get('/', (req, res) => {
    let id1=req.params.id1;
    let id2=req.params.id2;
    res.render('index', {id1: id1, id2: id2});
})
*/
/*
app.get('/', (req, res) => {

    res.render('index');
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.get('*', (req, res) => {
    res.send('404,This page does not exist');
})

app.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
})
*/

//listen
app.listen(3000, () => {
    console.log(`Server is up on port ${PORT}`,);
})

