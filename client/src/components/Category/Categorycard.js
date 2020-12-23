import React from 'react'
import {deletecategorie,editCategorie} from "../../js/actions/categoryaction"
import {useDispatch} from "react-redux"
import {Link} from "react-router-dom"

function Categorycard({e,name,setName,setEdit}) {
    const dispatch = useDispatch()

    const deletecategoriee=()=>{
        dispatch(deletecategorie(e._id))
    }

    const getcategoryfield=(text)=>{
        setName(text.name)
        setEdit(true)
    }
    return (
        <tr>
        <td>{e.name}</td>
 
        
        <td className="text-center"><Link to={`/category/edit/${e._id}`} ><button onClick={()=>getcategoryfield(e) } className='btn btn-info btn-xs'><span className="glyphicon glyphicon-edit"></span> Edit</button></Link> <button onClick={deletecategoriee }className="btn btn-danger btn-xs"><span className="glyphicon glyphicon-remove"></span> Del</button></td>
    </tr>
    )
}

export default Categorycard
