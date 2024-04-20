const dbConnection=require('../config/db');

const todasCarpetas = (req,res)=>{
    dbConnection.query("SELECT * FROM carpeta",(err,data)=>{
        if (err) {
            res.status(500).send("mensj " + err)
        }else{
            res.send(data)
        }
    })
    res.send("ok")
};

const cargarCarpeta = (req,res)=>{
   let info = req.body
   res.send(info)
};


module.exports={todasCarpetas,cargarCarpeta};