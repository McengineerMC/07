import React,{useState,useEffect} from 'react'
import Addcategory from './Addcategory'
import { useSelector,useDispatch } from "react-redux";
import {addCategories,getCategories} from "../../js/actions/categoryaction"
import Categorycard from "./Categorycard"
import {Link}  from "react-router-dom"
import "./category.css"



function Category({name,setName,setEdit}) {
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(getCategories());
      },[]);
    const categories =useSelector((state)=>state.categoryreducer.categories)

   
    return (
        <div className="container">

    <div className="row col-md-6 col-md-offset-3 custyle">
    <Link  to ="/category/add"><button className="btn btn-primary btn-xs pull-right"> + Add Category</button></Link>
    <table className="table table-striped custab">
    
        
        <thead>
        

        <tr>

        <th>Categories</th>
            <th className="text-center">Action</th>
        </tr>
    </thead>
        
    
    {categories.map(e=>
            <Categorycard e={e} name={name} setName={setName} setEdit={setEdit}/>)}
            
          
    </table>
    </div>
</div>
        
            
        
    )
}

export default Category
