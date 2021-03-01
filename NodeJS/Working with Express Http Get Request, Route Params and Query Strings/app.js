const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('/example',(req,res)=>{
    res.send('hitting example route');
});


app.get('/example/:name/:age',(req,res)=>{
    console.log(req.params);
    console.log(req.query);//if the user wants to sort the data
    res.send(req.params.name + " : " + req.params.age);
});
