const express=require("express")
const router=express.Router()
const Category=require("../models/Category")
const {
    validator,
    categoryRules,
  } = require("../middlewares/bodyValidator");


// add category
router.post('/addcategory', categoryRules(), validator,(req,res)=>{
    const {name}=req.body

    const category= new Category({name})
     category.save()
     .then(category=>res.send(category))
     .catch(err=>console.log(err))
          });
// get all category
router.get('/allcategory',(req,res)=>{
    Category.find()
    .then(category=>res.send(category))
    .catch(err=>console.log(err))
          });

//Delete category
router.delete("/deletecategory/:_id",(req,res)=>{
    const _id=req.params._id

     Category.findOneAndDelete({_id}).then(category=>res.send(category))
     .catch(err=>console.log(err))
    });

// edit category
router.put("/editcategory/:_id",(req,res)=>{

    const {name}=req.body
    const _id=req.params._id

    Category.findOneAndUpdate({_id},{$set:{name}},{new:true})
    .then(category=>res.send(category))
    .catch(err=>console.log(err))
});


module.exports=router
