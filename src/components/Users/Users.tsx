import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";

export const Users = (props: UsersPropsType) => {

   if (props.usersState.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
         .then(response => {
            console.log(response)
            props.setUsers(response.data.items);
         })
   };

   return (
      <div>
         {
            props.usersState.map(u => {
               return (
                  <div key={u.id + '-user'}>
                     <div>
                        <div>
                           <img src={u.photos.small !== null ? u.photos.small : 'https://via.placeholder.com/100x100'} alt="avatar-user"/>
                        </div>
                        <div>
                           {
                              u.followed
                                 ? <button onClick={() => props.unfollowUsers(u.id)}>unfollow</button>
                                 : <button onClick={() => props.followUser(u.id)}>follow</button>
                           }
                        </div>
                     </div>
                     <div>
                        <div>
                           <div>{u.name}</div>
                           <div>{u.status}</div>
                        </div>
                     </div>
                  </div>
               );
            })
         }
      </div>
   );
};
