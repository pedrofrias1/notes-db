require('dotenv').config();
const mysql2=require('mysql2');

const infoDB={
    host:'localhost',
    user:'root',
    database:'notes',
}
const dbConnection=mysql2.createConnection(infoDB)
dbConnection.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("connection con db mySql exitosa! " + infoDB.database);
    };
});

module.exports=dbConnection;