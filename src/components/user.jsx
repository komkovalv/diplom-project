import React from "react";
import QualitieList from "./qualitieList";
 import BookMark from "./bookmark";

const User=({
    _id,
     name,
     qualities,
      profession, 
      completedMeetings, 
      rate,
      bookmark, 
      onDelete,
      onToggleBookmark
     
    })=>{
 return(
    <tr>
           <td>{name}</td> 
          <td>{<QualitieList qualities={qualities}/> }
           </td>
             <td> {profession.name}</td>
            <td>{completedMeetings}</td>
            <td>{rate}/5</td>
            <td>{<BookMark id={_id} status={bookmark} onToggleBookmark={onToggleBookmark}/>}</td>
            <td><button className="btn btn-danger"
               onClick={()=>onDelete(_id) }>
              delete</button></td>
            </tr>
 )
}
export default User