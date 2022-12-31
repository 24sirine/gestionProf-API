const express = require("express");
const mongoose = require ("mongoose");
const prof = require("./models/prof");
mongoose.set('strictQuery', true);
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.get('/profs',async (req,res)=>{


    try{
        await prof.find({})
        .then(result=>{res.send(result)})
        
        }
        catch (err)
        {console.log(err);}
    })

app.post('/ajouter-prof',async(req,res)=>{
    try{
    let new_prof = new prof ({
      nomPrenom : req.body.nomPrenom,
      adresse : req.body.adresse,
      email : req.body.email,
      telephone : req.body.telephone  ,
    });
await new_prof.save()
res.send('save effectué avec succes !');
}
catch(err){
    console.log(err);
}

});

app.delete('/delete/:id',async(req,res)=>{
    try{
       
        await prof.findOneAndDelete ({_id : req.params.id } )
        res.send("supprimé avec succes!");
    }
    catch(err){
        res.send(err)
    }
})

app.put('/maj/:id',async(req,res)=>{
try{
    await prof.findByIdAndUpdate({_id : req.params.id } ,{email:req.body.email,});
    res.send("mise a jour avec succes");
}
catch(err){
    res.send(err)
}
})


mongoose.connect('mongodb+srv://sirine:sirine@cluster0.elclxzi.mongodb.net/?retryWrites=true&w=majority',(err,done)=>
{if (err)
{console.log(err)}
if (done){
    console.log("base de donne connecté avec success!");
}}
);
app.listen(5000,()=> console.log("serveur marche  bien"));