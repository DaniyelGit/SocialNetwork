import React from "react";
import s from './Users.module.css'
import userPhoto from '../../assets/images/user.png';
import {UserType} from "../../redux/UsersReducer/UsersReducer";


type UsersType = {
    usersState: Array<UserType>
    pageSize: number
    onPageChanged: (numPage: number) => void
    totalUsersCount: number
    currentPage: number
    follow: (idUser: string) => void
    unFollow: (idUser: string) => void
}

export const Users = (props: UsersType) => {

        let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div>
                    {
                        pages.map(p => {
                            return (
                              <span className={props.currentPage === p ? s.activePage : ''}
                                    onClick={() => props.onPageChanged(p)}
                              >
                               {p}
                              </span>
                            );
                        })
                    }
                </div>
                {props.usersState.map(u => {
                    return (
                        <div key={u.id}>
                            <span>
                                <div>
                                    <img className={s.userPhoto}
                                         src={u.photos.small !== null ? u.photos.small : userPhoto}
                                         alt="avatar"/>
                                </div>
                                <div>
                                    {u.followed
                                        ? <button onClick={() => props.unFollow(u.id)}>Follow</button>
                                        : <button onClick={() => props.follow(u.id)}>Unfollow</button>
                                    }
                                </div>
                            </span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{'u.location.city'}</div>
                                <div>{'u.location.country'}</div>
                            </span>
                        </div>
                    );
                })}
            </div>
        );
}
