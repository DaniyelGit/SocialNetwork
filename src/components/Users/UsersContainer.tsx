import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/store/store";
import {UserType} from "../../redux/reducer/users-reducer";
import {
   changeCurrentPage,
   followUser, getUsers, setTotalUsersCount,
   setUsers, toggleFollowingProgress, toggleIsFetching,
   unfollowUser
} from "../../redux/actionsCreator/actionsForUsers";
import React from "react";
import {Preloader} from "../../common/Preloader";
import preloaderSvg from '../../images/svg-loaders/preloader.svg';
import {usersAPI} from "../../api/api";


// Users Container API
class UsersContainerAPI extends React.Component<UsersContainerAPIType, {}> {
   componentDidMount() {
      this.props.getUsers(this.props.currentPage, this.props.pageSize);
      /*this.props.toggleIsFetching(true);
      usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
         .then(response => {
            console.log(response)
            this.props.setUsers(response.items);
            this.props.setTotalUsersCount(response.totalCount);
            this.props.toggleIsFetching(false);
         });*/
   }


   changeCurrentPageHandler = (currentPage: number) => {
      this.props.toggleIsFetching(true);
      this.props.changeCurrentPage(currentPage);
      usersAPI.getUsers(currentPage, this.props.pageSize)
         .then(response => {
            this.props.setUsers(response.items);
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
               followingProgress={this.props.followingProgress}
               changeCurrentPageHandler={this.changeCurrentPageHandler}
               toggleFollowingProgress={this.props.toggleFollowingProgress}
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
   followingProgress: number[]
}

type mapDispatchToPropsType = {
   followUser: (userID: number) => void
   unfollowUser: (userID: number) => void
   setUsers: (users: UserType[]) => void
   changeCurrentPage: (currentPage: number) => void
   setTotalUsersCount: (totalCount: number) => void
   toggleIsFetching: (isFetching: boolean) => void
   toggleFollowingProgress: (isFetching: boolean, userID: number) => void
   getUsers: (currentPage: number, pageSize: number) => void
}
export type UsersContainerAPIType = mapStateToPropsType & mapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
   return {
      usersState: state.usersPage.users,
      totalUsersCount: state.usersPage.totalUsersCount,
      pageSize: state.usersPage.pageSize,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching,
      followingProgress: state.usersPage.followingProgress,
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
   toggleIsFetching, toggleFollowingProgress,
   getUsers,
})(UsersContainerAPI)