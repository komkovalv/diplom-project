import React from "react";

 const Quality=({color, name})=>{
    return(
    <span className={"m-2 p-2 fs-7 badge text-bg-"+color}> {name}</span>
    )
 }
 export default Quality