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


app.listen(8081, () => console.log(`App listening on port!`));
