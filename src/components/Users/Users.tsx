import React from 'react';
import s from './Users.module.css';
import {UserType} from "../../redux/reducer/users-reducer";
import {NavLink} from "react-router-dom";



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
/*export class Users extends React.Component<UsersPropsType, {}> {

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
}*/


type UsersPropsType = {
   usersState: UserType[]
   totalUsersCount: number
   pageSize: number
   currentPage: number
   followingProgress: number[]
   follow: (userID: number) => void
   unfollow: (userID: number) => void
   changeCurrentPageHandler: (currentPage: number) => void
   toggleFollowingProgress: (isFollowing: boolean, userID: number) => void
}

export const Users = (props: UsersPropsType) => {
   let pagesSize = Math.ceil(props.totalUsersCount / props.pageSize);

   const pages = [];

   for (let i = 1; i <= pagesSize; i++) {
      pages.push(i);
   }


   return (
      <div>
         {
            props.usersState.map(u => {
               return (
                  <div key={u.id}>
                     <div>
                        <div>
                           <NavLink to={`/profile/${u.id}`}>
                              <img src={u.photos.small ? u.photos.small : 'https://via.placeholder.com/100x100'}
                                   alt="avatar-user"/>
                           </NavLink>
                        </div>
                        <div>
                           {
                              u.followed
                                 ? <button disabled={props.followingProgress.some(id => id === u.id)}
                                           onClick={() => {
                                              props.unfollow(u.id);
                                              /*props.toggleFollowingProgress(true, u.id);
                                              usersAPI.deleteFollowStatus(u.id)
                                                 .then(response => {
                                                    if (response.resultCode === 0) {
                                                       props.unfollowSuccess(u.id);
                                                    }
                                                    props.toggleFollowingProgress(false, u.id);
                                                 })*/
                                           }}>unfollow</button>
                                 : <button disabled={props.followingProgress.some(id => id === u.id)}
                                           onClick={() => {
                                              props.follow(u.id);
                                              /*props.toggleFollowingProgress(true, u.id);
                                              usersAPI.postFollowStatus(u.id)
                                                 .then(response => {
                                                    if (response.resultCode === 0) {
                                                       props.followSuccess(u.id);
                                                    }
                                                    props.toggleFollowingProgress(false, u.id);
                                                 })*/
                                           }}>follow</button>
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
                           className={s.page + ' ' + (props.currentPage === p ? s.selectedPage : '')}
                           onClick={() => {
                              props.changeCurrentPageHandler(p)
                           }}
                     >{p} </span>
                  )
               })
            }
         </div>
      </div>
   );
}