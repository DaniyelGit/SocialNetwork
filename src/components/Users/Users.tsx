import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";

/*export const Users = (props: UsersPropsType) => {

   const getUsers = () => {
      if (props.usersState.length === 0) {
         axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
               console.log(response)
               props.setUsers(response.data.items);
            })
      }
      ;
   }

   return (
      <div>
         <button onClick={getUsers}>get users</button>
         {
            props.usersState.map(u => {
               return (
                  <div key={u.id + '-user'}>
                     <div>
                        <div>
                           <img src={u.photos.small ? u.photos.small : 'https://via.placeholder.com/100x100'}
                                alt="avatar-user"/>
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
};*/

export class Users extends React.Component<UsersPropsType, {}> {

   constructor(props: UsersPropsType) {
      super(props);
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
         .then(response => {
            this.props.setUsers(response.data.items);
         });
   }


   render() {
      return (
         <div>
            {
               this.props.usersState.map(u => {
                  return (
                     <div key={u.id}>
                        <div>
                           <div>
                              <img src={u.photos.small ? u.photos.small : 'https://via.placeholder.com/100x100'}
                                   alt="avatar-user"/>
                           </div>
                           <div>
                              {
                                 u.followed
                                    ? <button onClick={() => this.props.unfollowUsers(u.id)}>unfollow</button>
                                    : <button onClick={() => this.props.followUser(u.id)}>follow</button>
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
   }
}
