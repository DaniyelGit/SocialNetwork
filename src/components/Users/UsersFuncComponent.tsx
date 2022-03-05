import React from "react";
import s from './Users.module.css'
import {UsersContainerType} from "./UsersContainer";
import userPhoto from '../../assets/images/user.png';
import axios from "axios";


export const UsersFuncComponent = (props: UsersContainerType) => {

    if (props.usersState.length === 0) {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items);
            });
    }


    const unfollowedHandler = (id: string) => {
        props.unFollow(id);
    }
    const followedHandler = (id: string) => {
        props.follow(id);
    }

    return (
        <div>
            {props.usersState.map(u => {
                return (
                    <div key={u.id}>
                      <span>
                          <div>
                              <img className={s.userPhoto} src={u.photos.small !== null ? u.photos.small : userPhoto} alt="avatar"/>
                          </div>
                          <div>
                              {u.followed
                                  ? <button onClick={() => unfollowedHandler(u.id)}>Follow</button>
                                  : <button onClick={() => followedHandler(u.id)}>Unfollow</button>
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