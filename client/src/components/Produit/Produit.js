import React,{useState,useEffect} from 'react'
import {addProduits,getProduits} from "../../js/actions/produitaction"
import { useSelector,useDispatch } from "react-redux";
import Addproduit from './Addproduit';
import Produitcard from "./Produitcard"
import {Link} from "react-router-dom"
import { getCategories } from '../../js/actions/categoryaction';
import "./Produit.css"

function Produit({setName,setEdit,
    setCategoryId,setReference,setTarif}) {
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(getProduits());
        dispatch(getCategories());
      },[]);
    const produits =useSelector((state)=>state.produitreducer.produits)
  
    return (
        <div className="cont">
            <Link to ="/produit/add"><button className="btn btn-primary btnnn"> + Add Produit</button></Link>
            <div className="cont1">
                {produits.map(e=>
               <Produitcard e={e}  setName={setName} setEdit = {setEdit}  
               setCategoryId={setCategoryId} setReference={setReference} setTarif={setTarif}/>)
                }
            </div>
        </div>
        
    )
}

export default Produit
