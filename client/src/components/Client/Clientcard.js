import React from 'react'
import {useDispatch} from "react-redux"
import {Link} from "react-router-dom"
import {deleteclient} from "../../js/actions/clientaction"
import "./client.css"

function Clientcard({e,firstName,setFirstName,lastName,setLastName,email,setEmail,setEdit}) {
    const dispatch = useDispatch()

    const deleteclientt=()=>{
        dispatch(deleteclient(e._id))
    }

    const getclientfield=(text)=>{
        setFirstName(text.firstName)
        setLastName(text.lastName)
        setEmail(text.email)
        setEdit(true)
    }
    return (
  
        
    
        <tbody>
    
        <tr>
        
        <td>{e.firstName}</td>
        <td>{e.lastName}</td>
        <td>{e.email}</td>

        <td><Link to={`/client/edit/${e._id}`}><button className="btn btn-primary btn-xs"  onClick={()=>getclientfield(e)}><span className="glyphicon glyphicon-pencil"></span></button></Link></td>
        <td><button className="btn btn-danger btn-xs"   onClick={deleteclientt} ><span className="glyphicon glyphicon-trash"></span></button></td>
        </tr>
        
     
        
        </tbody>

    )
}

export default Clientcard
