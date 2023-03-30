import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store/redux-store";
import {Dispatch} from "redux";
import {UserType} from "../../redux/reducer/users-reducer";
import {followUserAC, setUsersAC, unfollowUserAC} from "../../redux/actionsCreator/actionsForUsers";

type mapStateToPropsType = {
   usersState: UserType[]
}
type mapDispatchToPropsType = {
   followUser: (userID: number) => void
   unfollowUsers: (userID: number) => void
   setUsers: (users: UserType[]) => void
}
export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
   return {
      usersState: state.usersPage.users,
   }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
   return {
      followUser: (userID: number) => {
         dispatch(followUserAC(userID));
      },
      unfollowUsers: (userID: number) => {
         dispatch(unfollowUserAC(userID));
      },
      setUsers: (users: UserType[]) => {
         dispatch(setUsersAC(users));
      },
   }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)