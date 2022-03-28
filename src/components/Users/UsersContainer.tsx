import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {
    followedAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersCountAC, toggleIsFetchingAC,
    unFollowedAC,
    UserType
} from "../../redux/UsersReducer/UsersReducer";
import {RootReducerType} from "../../redux/redux-store";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../../common/Preloader/Preloader";

export type UsersContainerType = mapStateToPropsType & mapDispatchToPropsType;

export type mapStateToPropsType = {
    usersState: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
export type mapDispatchToPropsType = {
    follow: (idUser: string) => void,
    unFollow: (idUser: string) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setUsersCount: (countUsers: number) => void
    toggleIsFetching: (toggleValue: boolean) => void
}

const mapStateToProps = (state: RootReducerType): mapStateToPropsType => {
    return {
        usersState: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
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
        },
        toggleIsFetching: (toggleValue) => {
            dispatch(toggleIsFetchingAC(toggleValue));
        }
    }
}


class UsersContainerAPI extends React.Component<mapStateToPropsType & mapDispatchToPropsType> {


    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setUsersCount(response.data.totalCount);
                this.props.toggleIsFetching(false);
            });
    }

    onPageChanged = (numPage: number) => {
        this.props.setCurrentPage(numPage);
        this.props.toggleIsFetching(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${numPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.toggleIsFetching(false);
            });
    }

    render() {
        return (
            <>
                {
                    this.props.isFetching ? <Preloader/> : null
                }
                <Users usersState={this.props.usersState}
                       pageSize={this.props.pageSize}
                       onPageChanged={this.onPageChanged}
                       totalUsersCount={this.props.totalUsersCount}
                       currentPage={this.props.currentPage}
                       follow={this.props.follow}
                       unFollow={this.props.unFollow}
                />
            </>
        )
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerAPI);