import React,{useState,useEffect} from 'react'
import {addClients,editClient} from "../../js/actions/clientaction"
import { useDispatch } from "react-redux";
import {Link,useHistory} from "react-router-dom"

function Formclient({firstName,setFirstName,lastName,setLastName,email,setEmail,edit,setEdit,id}) {
    const dispatch=useDispatch()
    const history=useHistory()

    
    
 

      const addClientss=(e)=>{
        e.preventDefault();
        if( (firstName.trim() !== "") &&(lastName.trim() !== "") && (email.trim() !== "") ){
          dispatch(addClients({firstName,lastName,email}));
          setFirstName("");
          setLastName("");
          setEmail("");
          history.push("/client")
        }else alert("please fill in the fields")
      }
      const editClientt=(e)=>{
        e.preventDefault();
        dispatch(editClient(id,{firstName,lastName,email}));
       
        setFirstName("");
        setLastName("");
        setEmail("");
        setEdit(false);
        history.push("/client")
    }
    const resetclient=()=>{
if (edit){setEdit(false);setFirstName("");setLastName("");setEmail("");};
setFirstName("");
setLastName("");
setEmail("");
history.push("/client")
        
    }
  
    return (
<div className="category-form">
    <form >
        <h2 className="text-center">Client</h2> 
        <div className="form-group">
		<input type="text" value={firstName} className ="form-control" placeholder="enter firstname" onChange={e=>setFirstName(e.target.value)}/>
        </div> 
        <div className="form-group">
        <input type="text" value={lastName} className ="form-control" placeholder="enter lastname" onChange={e=>setLastName(e.target.value)}/>
        </div> 
        <div className="form-group">
        <input type="email" value={email} className ="form-control" placeholder="enter email" onChange={e=>setEmail(e.target.value)}/>
        </div> 
        <div className="form-group">
        <button type="submit" className="btn btn-primary btn-block" onClick={edit ? editClientt : addClientss}>Submit</button>
        <button type="submit" className="btn btn-primary btn-block" onClick={resetclient}>Back</button>
        </div>
         
    </form>
  
</div>
    )
}

export default Formclient
