import React from 'react'
import {addCategories,editCategorie} from "../../js/actions/categoryaction"
import { useDispatch} from "react-redux";
import {useHistory} from "react-router-dom"
import "./Formcategory.css"

function Formcategory({name,setName,edit,setEdit,id}) {
    const dispatch=useDispatch()
    const history=useHistory()

    
    
 

      const addCategoriees=(e)=>{
        e.preventDefault();
        if(name.trim() !== ""){
          dispatch(addCategories({name}));
          setName("")
          history.push("/categorie")
        }else alert("please fill in the fields")
      }
      const editCategoriees=(e)=>{
        e.preventDefault();
        dispatch(editCategorie(id,{name}));
        setEdit(false);
        setName("");
        history.push("/categorie")
    }
    const resetcategorie=()=>{
if (edit){setEdit(false);setName("");};
        setName("");
        history.push("/categorie")
        
    }
  
    return (
<div className="category-form">
    <form >
        <h2 className="text-center">Category</h2> 
        <div className="form-group">
        <input type="text" value={name} className ="form-control"placeholder="enter category" onChange={e=>setName(e.target.value)}/>
        </div> 
        
        <div className="form-group">
        <button type="submit" className="btn btn-primary btn-block" onClick={edit ? editCategoriees : addCategoriees}>Submit</button>
        <button type="submit" className="btn btn-primary btn-block" onClick={resetcategorie}>Back</button>
        </div>
         
    </form>
  
</div>

    )
}

export default Formcategory
