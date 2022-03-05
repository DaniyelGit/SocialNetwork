import React from "react";
import s from './Users.module.css'
import {mapDispatchToPropsType, mapStateToPropsType} from "./UsersContainer";
import userPhoto from '../../assets/images/user.png';
import axios from "axios";


export class Users extends React.Component<mapStateToPropsType & mapDispatchToPropsType> {

    componentDidMount() {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return (
            <div>
                {this.props.usersState.map(u => {
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
                                        ? <button onClick={() => this.props.unFollow(u.id)}>Follow</button>
                                        : <button onClick={() => this.props.follow(u.id)}>Unfollow</button>
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


}
