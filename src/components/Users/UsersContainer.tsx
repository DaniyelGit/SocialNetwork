import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store/redux-store";
import {Dispatch} from "redux";
import {UserType} from "../../redux/reducer/users-reducer";
import {
   changeCurrentPageAC,
   followUserAC, setTotalUsersCountAC,
   setUsersAC,
   unfollowUserAC
} from "../../redux/actionsCreator/actionsForUsers";

type mapStateToPropsType = {
   usersState: UserType[]
   totalUsersCount: number
   pageSize: number
   currentPage: number
}
type mapDispatchToPropsType = {
   followUser: (userID: number) => void
   unfollowUsers: (userID: number) => void
   setUsers: (users: UserType[]) => void
   changeCurrentPage: (currentPage: number) => void
   setTotalUsersCount: (totalCount: number) => void
}
export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
   return {
      usersState: state.usersPage.users,
      totalUsersCount: state.usersPage.totalUsersCount,
      pageSize: state.usersPage.pageSize,
      currentPage: state.usersPage.currentPage,
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
      changeCurrentPage: (currentPage: number) => {
         dispatch(changeCurrentPageAC(currentPage));
      },
      setTotalUsersCount: (totalCount: number) => {
         dispatch(setTotalUsersCountAC(totalCount));
      },
   }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)