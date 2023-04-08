import {UserType} from "../reducer/users-reducer";


type followUserACType = ReturnType<typeof followUser>;
export const followUser = (userID: number) => {
   return {
      type: "FOLLOW-USER",
      payload: userID
   } as const;
}


type unfollowUserACType = ReturnType<typeof unfollowUser>;
export const unfollowUser = (userID: number) => {
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



export type actionsUsersType = followUserACType
   | unfollowUserACType
   | setUsersACType
   | changeCurrentPageACType
   | setTotalUsersCountACType
   | toggleIsFetchingACType;