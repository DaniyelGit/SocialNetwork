import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/store/store";
import {UserType} from "../../redux/reducer/users-reducer";
import {
   follow,
  getUsers, setTotalUsersCount,
   toggleFollowingProgress, unfollow,
} from "../../redux/actionsCreator/actionsForUsers";
import React from "react";
import {Preloader} from "../../common/Preloader";
import preloaderSvg from '../../images/svg-loaders/preloader.svg';


// Users Container API
class UsersContainerAPI extends React.Component<UsersContainerAPIType, {}> {
   componentDidMount() {
      this.props.getUsers(this.props.currentPage, this.props.pageSize);
   }


   changeCurrentPageHandler = (currentPage: number) => {
      this.props.getUsers(currentPage, this.props.pageSize);
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
               unfollow={this.props.unfollow}
               follow={this.props.follow}
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
   follow: (userID: number) => void
   unfollow: (userID: number) => void
   setTotalUsersCount: (totalCount: number) => void
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


export const UsersContainer = connect(mapStateToProps, {
   follow, unfollow, setTotalUsersCount,
   toggleFollowingProgress, getUsers,
})(UsersContainerAPI)