import React from "react";

 const SearchStatus=(props)=>{
    const {userCount}=props
    const renderPhrase=(number)=>{ 
        const lastNum= +number.toString().slice(-1)
        if(number===1) return "человек тусанет"
        if (number>4 && number <15){
         return "человек тусанут"
        }else if([2,3,4].includes(lastNum)){
         return "человека тусанут"
        }
           } 

 return(
    <h2>
    <span className={(userCount>0 ? 'badge text-bg-primary':' badge text-bg-danger')}>
      {userCount>0 ? 
    `${userCount+' '+renderPhrase(userCount)} с тобой сегодня`:'Никто с тобой не тусанет' }
    </span>
    </h2> 
 )
 }
  export default SearchStatus