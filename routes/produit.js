const express=require("express")
const router=express.Router()
const Produit=require("../models/Produit")


// add Produit
router.post('/addproduit', (req,res)=>{

    const {categoryId,name,reference,tarif}=req.body
    

    const produit= new Produit({categoryId,name,reference,tarif})
    produit.save()
     .then(produit=>res.send(produit))
     .catch(err=>console.log(err))
          });
// get all category
router.get('/allproduit',(req,res)=>{
    Produit.find()
    .then(produit=>res.send(produit))
    .catch(err=>console.log(err))
          });

//Delete category
router.delete("/deleteproduit/:_id",(req,res)=>{
    const _id=req.params._id

     Produit.findOneAndDelete({_id}).then(produit=>res.send(produit))
     .catch(err=>console.log(err))
    });

// edit category
router.put("/editproduit/:_id",(req,res)=>{

    const {categoryId,name,reference,tarif}=req.body
    const _id=req.params._id

    Produit.findOneAndUpdate({_id},{$set:{categoryId,name,reference,tarif}},{new:true})
    .then(produit=>res.send(produit))
    .catch(err=>console.log(err))
});


module.exports=router