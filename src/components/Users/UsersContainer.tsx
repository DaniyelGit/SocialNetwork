import {connect} from "react-redux";
import {Dispatch} from "redux";
import {followedAC, setCurrentPageAC, setUsersAC, unFollowedAC, UserType} from "../../redux/UsersReducer/UsersReducer";
import {RootReducerType} from "../../redux/redux-store";
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
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);