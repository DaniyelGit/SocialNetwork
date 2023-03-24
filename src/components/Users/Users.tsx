import React from 'react';
import {UsersPropsType} from "./UsersContainer";

export const Users = (props: UsersPropsType) => {

   if (props.usersState.length === 0) {
      props.setUsers([
         {
            id: 1,
            fullName: 'Daniyel',
            status: 'I am a boss',
            photoUrl: 'https://via.placeholder.com/50x50',
            location: {city: 'Ostrovets', country: 'Belarus'},
            isFollow: true
         },
         {
            id: 2,
            fullName: 'Victoria',
            status: 'Hi all !',
            photoUrl: 'https://via.placeholder.com/50x50',
            location: {city: 'Ostrovets', country: 'Belarus'},
            isFollow: false
         },
         {
            id: 3,
            fullName: 'Andrey',
            status: 'I love music',
            photoUrl: 'https://via.placeholder.com/50x50',
            location: {city: 'Lida', country: 'Belarus'},
            isFollow: true},
         {
            id: 4,
            fullName: 'Theresa',
            status: 'I want to travel',
            photoUrl: 'https://via.placeholder.com/50x50',
            location: {city: 'Radun', country: 'Belarus'},
            isFollow: false
         },
      ])
   };

   return (
      <div>
         {
            props.usersState.map(u => {
               return (
                  <div key={u.id + '-user'}>
                     <div>
                        <div>
                           <img src={u.photoUrl} alt="avatar-user"/>
                        </div>
                        <div>
                           {
                              u.isFollow
                                 ? <button onClick={() => props.unfollowUsers(u.id)}>unfollow</button>
                                 : <button onClick={() => props.followUser(u.id)}>follow</button>
                           }
                        </div>
                     </div>
                     <div>
                        <div>
                           <div>{u.fullName}</div>
                           <div>{u.status}</div>
                        </div>
                        <div>
                           <div>{u.location.country}</div>
                           <div>{u.location.city}</div>
                        </div>
                     </div>
                  </div>
               );
            })
         }
      </div>
   );
};
