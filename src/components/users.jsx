import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import User from "./user";

const Users=({users, ...rest})=>{

  return(
    <> 
    {users.length>0 && (<table class="table">
  <thead >
    <tr>
      <th scope="name">Имя</th>
      <th scope="quality">Качества</th>
      <th scope="profession">Профессия</th>
      <th scope="completedMeetings">Встретился,раз</th>
      <th scope="rate">Оценка</th>
      <th scope="rate">Избранное</th>
      <th scope="delete"></th>
    </tr>
  </thead>
  <tbody className="users-list">
        {users.map((user)=>(
          <User key={user._id} {...user} {...rest}/>
         ))} 
          
            
  </tbody>
</table> 
)}
</>
)
}


export default Users