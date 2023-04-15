import React from "react";

const BookMark=({status, onToggleBookmark, id})=>{
  return (
  <button className="btn btn-outline-primary" onClick={()=>onToggleBookmark(id)}>
    <i className={"bi bi-emoji" + (status ? "-heart-eyes-fill" : "-neutral" )}></i>
  </button>
  )
 //
}
 export default BookMark