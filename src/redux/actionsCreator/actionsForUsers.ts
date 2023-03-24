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



export type actionsUsersType = followUserACType
   | unfollowUserACType
   | setUsersACType;