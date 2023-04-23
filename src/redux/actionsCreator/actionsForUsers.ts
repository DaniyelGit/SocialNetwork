import {UserType} from "../reducer/users-reducer";
import {Dispatch} from "redux";
import {usersAPI} from "../../api/api";


type followUserACType = ReturnType<typeof followSuccess>;
export const followSuccess = (userID: number) => {
   return {
      type: "FOLLOW-USER",
      payload: userID
   } as const;
}


type unfollowUserACType = ReturnType<typeof unfollowSuccess>;
export const unfollowSuccess = (userID: number) => {
   return {
      type: "UNFOLLOW-USER",
      payload: userID
   } as const;
}


type setUsersACType = ReturnType<typeof setUsers>;
export const setUsers = (users: UserType[]) => {
   return {
      type: "SET-USERS",
      payload: users
   } as const;
}

type changeCurrentPageACType = ReturnType<typeof changeCurrentPage>;
export const changeCurrentPage = (currentPage: number) => {
   return {
      type: 'CHANGE-CURRENT-PAGE',
      payload: currentPage,
   } as const;
}


type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>;
export const setTotalUsersCount = (totalCount: number) => {
   return {
      type: 'SET-TOTAL-USERS-COUNT',
      payload: {
         totalUsersCount: totalCount
      },
   } as const;
}

type toggleIsFetchingACType = ReturnType<typeof toggleIsFetching>;
export const toggleIsFetching = (isFetching: boolean) => {
   return {
      type: 'TOGGLE_IS_FETCHING',
      payload: {
         isFetching,
      }
   } as const;
}

type toggleFollowingProgressType = ReturnType<typeof toggleFollowingProgress>;
export const toggleFollowingProgress = (isFollowing: boolean, userID: number) => {
   return {
      type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
      payload: {
         isFollowing,
         userID,
      }
   } as const;
}

export const getUsers = (currentPage: number = 1, pageSize: number = 5) => {
   return (dispatch: Dispatch) => {
      dispatch(toggleIsFetching(true));
      usersAPI.getUsers(currentPage, pageSize)
         .then(response => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(response.items));
            dispatch(setTotalUsersCount(response.totalCount));
         })
   }
};

export const follow = (userId: number) => {
   return (dispatch: Dispatch) => {
      dispatch(toggleFollowingProgress(true, userId));
      usersAPI.postFollowStatus(userId)
         .then(response => {
            if (response.resultCode === 0) {
               dispatch(followSuccess(userId));
            };
            dispatch(toggleFollowingProgress(false, userId));
         })
   }
};

export const unfollow = (userId: number) => {
   return (dispatch: Dispatch) => {
      dispatch(toggleFollowingProgress(true, userId));
      usersAPI.deleteFollowStatus(userId)
         .then(response => {
            if (response.resultCode === 0) {
               dispatch(unfollowSuccess(userId));
            };
            dispatch(toggleFollowingProgress(false, userId));
         })
   }
};


export type actionsUsersType = followUserACType
   | unfollowUserACType
   | setUsersACType
   | changeCurrentPageACType
   | setTotalUsersCountACType
   | toggleIsFetchingACType
   | toggleFollowingProgressType;