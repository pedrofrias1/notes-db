const express = require('express');
const app = express();
const port = 5000;

app.use(express.json())

let carpetas=[
    {
        titulo:"alos des yout por ti te riu",
        description:"lo per ts viu opte res"
    },
    {
        titulo:"alos des yout por ti te riu",
        description:"lo per ts viu opte res"
    },
    {
        titulo:"alos des yout por ti te riu",
        description:"lo per ts viu opte res"
    },
    {
        titulo:"alos des yout por ti te riu",
        description:"lo per ts viu opte res"
    },

]

//peticiones => lo que se debe guardar en cartelera rosa carpea=titulo-carpeta
app.get("/carpeta",(req,res)=>{
   res.send("resp peticion tipo get /carpeta");
});

app.get("/carpetas",(req,res)=>{
    res.send(carpetas)
})

app.post("/cargarCarp",(req,res)=>{
    console.log(req.body);
    res.send("se recibio el plato")
})



app.listen(port,()=>{
    console.log(`server - corriendo en el puerto ${port}`);
});