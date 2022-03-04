import {connect} from "react-redux";
import {Users} from "./Users";
import {Dispatch} from "redux";
import {followedAC, setUsersAC, unFollowedAC, UserType} from "../../redux/UsersReducer/UsersReducer";
import {RootReducerType} from "../../redux/redux-store";


export type UsersContainerType = mapStateToPropsType & mapDispatchToPropsType;

type mapStateToPropsType = {
    usersState: Array<UserType>
}
type mapDispatchToPropsType = {
    follow: (idUser: string) => void,
    unFollow: (idUser: string) => void
    setUsers: (users: Array<UserType>) => void
}

const mapStateToProps = (state: RootReducerType): mapStateToPropsType => {
    return {
        usersState: state.usersPage.users
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
        }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);