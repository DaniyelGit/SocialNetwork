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
import React from "react";
import axios from "axios";

// Users Container API
class UsersContainerAPI extends React.Component<UsersContainerAPIType, {}> {
   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
         });
   }

   changeCurrentPageHandler = (currentPage: number) => {
      this.props.changeCurrentPage(currentPage);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.setUsers(response.data.items);
         });
   }

   render() {
      return (
         <Users
            usersState={this.props.usersState}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            unfollowUser={this.props.unfollowUser}
            followUser={this.props.followUser}
            changeCurrentPageHandler={this.changeCurrentPageHandler}
         />
      );
   }

}

//Users Container
type mapStateToPropsType = {
   usersState: UserType[]
   totalUsersCount: number
   pageSize: number
   currentPage: number
}
type mapDispatchToPropsType = {
   followUser: (userID: number) => void
   unfollowUser: (userID: number) => void
   setUsers: (users: UserType[]) => void
   changeCurrentPage: (currentPage: number) => void
   setTotalUsersCount: (totalCount: number) => void
}
export type UsersContainerAPIType = mapStateToPropsType & mapDispatchToPropsType;

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
      unfollowUser: (userID: number) => {
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


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerAPI)