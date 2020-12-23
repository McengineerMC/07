import React,{useState,useEffect} from 'react'
import {addProduits,editProduit} from "../../js/actions/produitaction"
import { useSelector,useDispatch } from "react-redux";
import {Link,useHistory} from "react-router-dom"

function Formproduit({name,setName,categoryId, reference, tarif,
    setCategoryId,setReference,setTarif,edit,setEdit,id}) {
    const dispatch=useDispatch()
    const history=useHistory()
    const categories =useSelector((state)=>state.categoryreducer.categories)


 

  const addProduitts=(e)=>{
      e.preventDefault();
    if( (categoryId.trim() !== "") &&(name.trim() !== "") && (reference.trim() !== "") && (tarif.trim() !== "")){
      dispatch(addProduits({categoryId,name,reference,tarif}));
      setCategoryId("")
      setName("")
      setReference("")
      setTarif("")
      history.push("/produitt")
    }else alert("please fill in the fields")
  }
  const editProduitt=(e)=>{
    e.preventDefault();
    dispatch(editProduit(id,{categoryId,name,reference,tarif}));
    setEdit(false);
    setCategoryId("")
    setName("")
    setReference("")
    setTarif("")
    history.push("/produitt")
}
const resetproduit=()=>{
    if (edit){setEdit(false);setCategoryId("");setName("");setReference("");setTarif("")};
    setCategoryId("")
    setName("")
    setReference("")
    setTarif("")
    history.push("/produitt")
            
        }
    return (
<div className="category-form">
    <form >
        <h2 className="text-center">Produit</h2> 

        <div className="form-group">
            <input type="text" value={name} className="form-control" placeholder="enter name" onChange={e=>setName(e.target.value)}/>
        </div> 
        <div className="form-group">
<input type="text" value={reference} className="form-control" placeholder="enter reference" onChange={e=>setReference(e.target.value)}/>
        </div>        
        <div className="form-group">
            <input type="text" value={tarif}  className="form-control" placeholder="enter tarif" onChange={e=>setTarif(e.target.value)}/>
        </div>
        <div className="form-group">
        <select name="pets" id="pet-select" className="form-control" value={categoryId} onChange={e=>setCategoryId(e.target.value)}>
                          <option value="">---Select---</option>
                             {
                                categories.map(ele=>
                                    <option key={ele._id} value={ele._id}>{ele.name}</option>
                                )
                            }

                        </select>
        </div>   
        <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block" onClick={edit ? editProduitt : addProduitts}>submit</button>
			<button type="submit" className="btn btn-primary btn-block" onClick={resetproduit}>back</button>
        </div>
         
    </form>
  
</div>
    )
}

export default Formproduit
