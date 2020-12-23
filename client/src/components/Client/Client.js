import React,{useEffect} from 'react'
import {Link} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"
import {getClients} from "../../js/actions/clientaction"
import Clientcard from "./Clientcard"


function Client({firstName,setFirstName,lastName,setLastName,email,setEmail,setEdit}) {
    const dispatch=useDispatch();
    useEffect(() => {
        dispatch(getClients());
      },[]);
    const clients =useSelector((state)=>state.clientreducer.clients)
    return (
 
    
        <div className="container">

        <div className="row">
            

            <div className="col-md-12">
           
            <div className="table-responsive">
            <Link to ="/client/add"><button className="btn btn-primary btn-xs pull-left"> + Add Client</button></Link>
                    
                  <table id="mytable" className="table table-bordred table-striped custab">
                       
                       <thead>
                       
                       
                       <th>First Name</th>
                        <th>Last Name</th>
                         
                         <th>Email</th>
                        
                          <th>Edit</th>
                          
                           <th>Delete</th>
                       </thead>
                       {clients.map(e=>
            <Clientcard e={e} firstName={firstName} setFirstName={setFirstName}  lastName={lastName} setLastName={setLastName} email={email} setEmail={setEmail} setEdit={setEdit}/>)}
            
    </table>
    </div>
    </div>
    </div>
    </div>
    )
}

export default Client
