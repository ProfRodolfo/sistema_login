const express = require('express')
const session = require('express-session')
const path = require('path')
const app = express()

//require do bodyparser responsável por capturar valores do form
const bodyParser = require("body-parser");

const mysql = require('mysql');
const exp = require('constants');

app.use(session({secret: "ssshhhhh"}))
app.use(express.static('public'))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/public'))

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

function conectiondb(){
    var con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'dblogin'
    })
    con.connect((err) =>{
        if(err){
            console.log('Erro connecting to database...', err)
            return
        }
        console.log('Connection established!')
    })
    return con;
}

app.get('/', (req,res) =>{ 
    let message = ''
    req.session.destroy();
    res.render('views/registro', {message: message})

})

app.get('/views/registro', (req,res) =>{
    res.redirect('../')
})

app.get('/views/home', (req, res) =>{
    // verifica se existe seção ativa
    if (req.session.user){
        let con = conectiondb();
        let query2 = 'SELECT * FROM users WHERE email LIKE ?';
        con.query(query2, [req.session.user],   
        function (err, results){
            res.render('views/home', {message: results})
        })
    }else{
        res.redirect("/")
    }
})

app.get('/views/login', (req, res) => {
    let message = '';
    res.render('views/login', {message: message})
})

//método post do register
app.post('/register', function (req, res){

    var username = req.body.nome;
    var pass = req.body.pwd;
    var email = req.body.email;
    var idade = req.body.idade;

    var con = conectiondb();

    var queryConsulta = 'SELECT * FROM users WHERE email LIKE ?';

    con.query(queryConsulta, [email], function (err, results){
        if (results.length > 0){            
            var message = 'E-mail já cadastrado';
            res.render('views/registro', { message: message });
        }else{
            var query = 'INSERT INTO users VALUES (DEFAULT, ?, ?, ?, ?)';

            con.query(query, [username, email, idade, pass], function (err, results){
                if (err){
                    throw err;
                }else{
                    console.log ("Usuario adicionado com email " + email);
                    var message = "ok";
                    res.render('views/registro', { message: message });
                }        
            });
        }
    });
});

app.listen(8081, () => console.log(`App listening on port!`));
