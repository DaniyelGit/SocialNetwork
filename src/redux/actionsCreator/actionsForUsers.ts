import {UserType} from "../reducer/users-reducer";


type followUserACType = ReturnType<typeof followUserAC>;
export const followUserAC = (userID: number) => {
   return {
      type: "FOLLOW-USER",
      payload: userID
   } as const;
}


type unfollowUserACType = ReturnType<typeof unfollowUserAC>;
export const unfollowUserAC = (userID: number) => {
   return {
      type: "UNFOLLOW-USER",
      payload: userID
   } as const;
}


type setUsersACType = ReturnType<typeof setUsersAC>;
export const setUsersAC = (users: UserType[]) => {
   return {
      type: "SET-USERS",
      payload: users
   } as const;
}

type changeCurrentPageACType = ReturnType<typeof changeCurrentPageAC>;
export const changeCurrentPageAC = (currentPage: number) => {
   return {
      type: 'CHANGE-CURRENT-PAGE',
      payload: currentPage,
   } as const;
}


type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>;
export const setTotalUsersCountAC = (totalCount: number) => {
   return {
      type: 'SET-TOTAL-USERS-COUNT',
      payload: {
         totalUsersCount: totalCount
      },
   } as const;
}



export type actionsUsersType = followUserACType
   | unfollowUserACType
   | setUsersACType
   | changeCurrentPageACType
   | setTotalUsersCountACType;