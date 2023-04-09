import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store/redux-store";
import {UserType} from "../../redux/reducer/users-reducer";
import {
   changeCurrentPage,
   followUser, setTotalUsersCount,
   setUsers, toggleIsFetching,
   unfollowUser
} from "../../redux/actionsCreator/actionsForUsers";
import React from "react";
import axios from "axios";
import {Preloader} from "../../common/Preloader";
import preloaderSvg from '../../images/svg-loaders/preloader.svg';

// Users Container API
class UsersContainerAPI extends React.Component<UsersContainerAPIType, {}> {
   componentDidMount() {
      this.props.toggleIsFetching(true);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
            this.props.toggleIsFetching(false);
         });
   }

   changeCurrentPageHandler = (currentPage: number) => {
      this.props.toggleIsFetching(true);
      this.props.changeCurrentPage(currentPage);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.setUsers(response.data.items);
            this.props.toggleIsFetching(false);
         });
   }

   render() {
      return (
         <>
            {
               this.props.isFetching && <Preloader preloader={preloaderSvg}/>
            }
            <Users
               usersState={this.props.usersState}
               totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               unfollowUser={this.props.unfollowUser}
               followUser={this.props.followUser}
               changeCurrentPageHandler={this.changeCurrentPageHandler}
            />
         </>
      );
   }

}

//Users Container
type mapStateToPropsType = {
   usersState: UserType[]
   totalUsersCount: number
   pageSize: number
   currentPage: number
   isFetching: boolean
}
type mapDispatchToPropsType = {
   followUser: (userID: number) => void
   unfollowUser: (userID: number) => void
   setUsers: (users: UserType[]) => void
   changeCurrentPage: (currentPage: number) => void
   setTotalUsersCount: (totalCount: number) => void
   toggleIsFetching: (isFetching: boolean) => void
}
export type UsersContainerAPIType = mapStateToPropsType & mapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
   return {
      usersState: state.usersPage.users,
      totalUsersCount: state.usersPage.totalUsersCount,
      pageSize: state.usersPage.pageSize,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching,
   }
}

/*const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
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
      toggleIsFetching: (isFetching: boolean) => {
         dispatch(toggleIsFetchingAC(isFetching))
      }
   }
}*/


export const UsersContainer = connect(mapStateToProps, {
   followUser, unfollowUser, setUsers,
   changeCurrentPage, setTotalUsersCount,
   toggleIsFetching,
})(UsersContainerAPI)