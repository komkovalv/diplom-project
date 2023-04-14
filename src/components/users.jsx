import React, { useState } from "react";
import api from "../api";
import 'bootstrap/dist/css/bootstrap.css';

const Users=()=>{
  const [users,setUsers]=useState(api.users.fetchAll())
  
  const handlDelete=(userId)=>{
    const newUsers=users.filter((user)=>user._id!==userId) 
    setUsers(newUsers) 
  }


 
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
    <> 
  <h2>
    <span className={(users.length>0 ? 'badge text-bg-primary':' badge text-bg-danger')}>
      {users.length>0 ? 
    `${users.length+' '+renderPhrase(users.length)} с тобой сегодня`:'Никто с тобой не тусанет' }
    </span>
    </h2> 
    {users.length>0 && <table class="table">
  <thead >
    <tr>
      <th scope="name">Имя</th>
      <th scope="quality">Качества</th>
      <th scope="profession">Профессия</th>
      <th scope="completedMeetings">Встретился,раз</th>
      <th scope="rate">Оценка</th>
      <th scope="delete"></th>
    </tr>
  </thead>
  <tbody className="users-list">
        {users.map((user)=>(
          <tr>
           <td>{user.name}</td> 
          <td>{user.qualities.map((qualities) => (
             <span className={"m-2 p-2 fs-7 badge text-bg-"+qualities.color}> 
              {qualities.name}</span>))}
           </td>
             <td> {user.profession.name}</td>

            <td>{user.completedMeetings}</td>
            <td>{user.rate}/5</td>
            <td><button className="btn btn-danger"
               onClick={()=>handlDelete(user._id) }>
              delete</button></td>
            </tr>
         ))} 
          
            
  </tbody>

</table> 
}



 
 
</>
    
  )  
}

export default Users