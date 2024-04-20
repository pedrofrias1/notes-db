const express = require('express');
const app = express();
const port = 5000;


require('./config/db')





app.use(express.json())
app.use("",require("./routes/routes"));

// app.use(express.urlencoded({extended:true}))




//peticiones => lo que se debe guardar en cartelera rosa carpea=titulo-carpeta
// app.get("/carpeta",(req,res)=>{
//    res.send("resp peticion tipo get /carpeta");
// });

// app.get("/carpetas",(req,res)=>{
//     res.send(carpetas)
// })

// app.post("/cargarCarp",(req,res)=>{
//     console.log(req.body);
//     res.send("se recibio carpeta")
// })



app.listen(port,()=>{
    console.log(`server - corriendo en el puerto ${port}`);
});