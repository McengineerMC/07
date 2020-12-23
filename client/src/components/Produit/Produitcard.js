import React from 'react'
import {deleteproduit} from "../../js/actions/produitaction"
import {useDispatch,useSelector} from "react-redux"
import {Link} from "react-router-dom"


function Produitcard({e,setName,setEdit,setCategoryId,setReference,setTarif}) {
    const categories =useSelector((state)=>state.categoryreducer.categories)
    const dispatch = useDispatch()
    const deleteproduitt=()=>{
        dispatch(deleteproduit(e._id))
    }
    const getproduitfield=(prod)=>{
        
        setCategoryId(prod.categoryId)
        setName(prod.name)
        setReference(prod.reference)
        setTarif(prod.tarif)
        setEdit(true)
    }
    return (
       
        
        <div className="card">
            <div className="inner-card"> 
                <div className="d-flex justify-content-center align-items-center mt-3 px-2">
                    <h3>Title: {e.name} </h3> 
                </div>
                <div className="px-2 d-flex justify-content-center">
                    <h4>Tarif: {e.tarif}</h4>
                </div>
                <div className="mt-2 px-2 d-flex justify-content-center" > <small>Reference: {e.reference}</small> </div>
                <div className="mt-2 px-2 d-flex justify-content-center"> <small>Category: {categories && categories.find(category=>category._id===e.categoryId) && categories.find(category=>category._id===e.categoryId).name}</small> </div>
                <div className="px-2 mt-3 d-flex justify-content-center"> <button className="btn  px-3 btn1 btn-danger" onClick={deleteproduitt}>del</button> <Link to={`/produit/edit/${e._id}`}><button className="btn btn-primary px-3 btn1 "onClick={()=>getproduitfield(e)}>edit</button></Link></div>
            </div>
        </div>
    
        
        
    )
}

export default Produitcard
