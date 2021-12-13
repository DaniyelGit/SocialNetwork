import React from "react";
import s from './Users.module.css'
import {UsersContainerType} from "./UsersContainer";

export const Users = (props: UsersContainerType) => {

    if (props.usersState.length === 0) {
        props.setUsers([
            {
                id: '1',
                photoUrl: 'https://avatarko.ru/img/kartinka/20/muzhchina_znamenitost_19191.jpg',
                followed: false,
                fullName: 'Daniyel',
                status: 'I am looking for a Job right now...',
                location: {city: 'Belarus', country: 'Minsk'}
            },
            {
                id: '2',
                photoUrl: 'https://avatarko.ru/img/kartinka/20/muzhchina_znamenitost_19191.jpg',
                followed: true,
                fullName: 'Vika',
                status: 'I am so pretty',
                location: {city: 'Belarus', country: 'Grodno'}
            },
            {
                id: '3',
                photoUrl: 'https://avatarko.ru/img/kartinka/20/muzhchina_znamenitost_19191.jpg',
                followed: false,
                fullName: 'Andrew',
                status: 'I like football',
                location: {city: 'Ukraine', country: 'Kiev'}
            },
        ])
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
                              <img className={s.userPhoto} src={u.photoUrl} alt="avatar"/>
                          </div>
                          <div>
                              {u.followed
                                  ? <button onClick={() => unfollowedHandler(u.id)}>Follow</button>
                                  : <button onClick={() => followedHandler(u.id)}>Unfollow</button>
                              }
                          </div>
                      </span>
                        <span>
                          <div>{u.fullName}</div>
                          <div>{u.status}</div>
                      </span>
                        <span>
                          <div>{u.location.city}</div>
                          <div>{u.location.country}</div>
                      </span>
                    </div>
                );
            })}
        </div>
    );
}