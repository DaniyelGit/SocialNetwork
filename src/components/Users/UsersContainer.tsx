import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {
    followedAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersCountAC,
    unFollowedAC,
    UserType
} from "../../redux/UsersReducer/UsersReducer";
import {RootReducerType} from "../../redux/redux-store";
import axios from "axios";
import {Users} from "./Users";

export type UsersContainerType = mapStateToPropsType & mapDispatchToPropsType;

export type mapStateToPropsType = {
    usersState: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
export type mapDispatchToPropsType = {
    follow: (idUser: string) => void,
    unFollow: (idUser: string) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setUsersCount: (countUsers: number) => void
}

const mapStateToProps = (state: RootReducerType): mapStateToPropsType => {
    return {
        usersState: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (idUser: string) => {
            dispatch(followedAC(idUser))
        },
        unFollow: (idUser: string) => {
            dispatch(unFollowedAC(idUser))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        setUsersCount: (countUsers: number) => {
            dispatch(setUsersCountAC(countUsers));
        }
    }
}


class UsersContainerAPI extends React.Component<mapStateToPropsType & mapDispatchToPropsType> {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (numPage: number) => {
        this.props.setCurrentPage(numPage);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${numPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return (
            <Users usersState={this.props.usersState}
                   pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged}
                   totalUsersCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
            />
        )
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerAPI);