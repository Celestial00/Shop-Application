const mysql = require("mysql");


var Con = mysql.createConnection({

    host : 'localhost',
    user : 'root',
    password : '',
    database : 'shop'

})

Con.connect((err) =>{

    if(err){

        console.log("error");

    }
    else{

        console.log("connected")

    }

});

Con.query("select * from products", (err, res,) =>{

    if(err){

        console.log("error");

    }

    else{

        console.log(res)

    }



})