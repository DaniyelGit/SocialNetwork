import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './Users.module.css';
import axios from "axios";

/*export const Users = (props: UsersPropsType) => {

   const getUsers = () => {
      if (props.usersState.length === 0) {
         axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
               props.setUsers(response.data.items);
            })
      };
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

   componentDidMount() {
         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
               this.props.setUsers(response.data.items);
               this.props.setTotalUsersCount(response.data.totalCount);
            });
   }

   changeCurrentPageHandler = (currentPage: number) => {
      this.props.changeCurrentPage(currentPage);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.setUsers(response.data.items);
         });
   }

   render() {

      let pagesSize = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

      const pages = [];

      for (let i = 1; i <= pagesSize; i++) {
         pages.push(i);
      }

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

            <div>
               {
                  pages.map((p, i) => {
                     return (
                        <span key={i}
                              className={s.page + ' ' + (this.props.currentPage === p ? s.selectedPage : '')}
                              onClick={() => {
                                 this.changeCurrentPageHandler(p)
                              }}
                        >{p} </span>
                     )
                  })
               }
            </div>
         </div>
      );
   }
}
