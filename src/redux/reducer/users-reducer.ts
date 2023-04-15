import {actionsUsersType} from "../actionsCreator/actionsForUsers";


export type UserType = {
   id: number
   name: string
   status: string
   photos: {
      small: string
      large: string
   }
   followed: boolean
};

// main type for state users
export type InitialStateUsersPageType = typeof InitialStateUsersPage;

const InitialStateUsersPage = {
   users: [] as UserType[],
   currentPage: 1,
   pageSize: 5,
   totalUsersCount: 0,
   isFetching: false,
   followingProgress: [] as number[],
}


export const usersReducer = (state: InitialStateUsersPageType = InitialStateUsersPage, action: actionsUsersType): InitialStateUsersPageType => {
   switch (action.type) {
      case "FOLLOW-USER": {
         return {
            ...state,
            users: state.users.map(u => u.id === action.payload
               ? {...u, followed: true}
               : u)
         };
      }
      case "UNFOLLOW-USER": {
         return {
            ...state,
            users: state.users.map(u => u.id === action.payload
               ? {...u, followed: false}
               : u)
         }
      }
      case "SET-USERS": {
         return {
            ...state,
            users: [...action.payload]
         }
      }
      case "CHANGE-CURRENT-PAGE": {
         return {
            ...state,
            currentPage: action.payload,
         }
      }
      case "SET-TOTAL-USERS-COUNT": {
         return {
            ...state,
            ...action.payload,
         }
      }
      case "TOGGLE_IS_FETCHING": {
         return {
            ...state,
            ...action.payload,
         }
      }
      case "TOGGLE_IS_FOLLOWING_PROGRESS": {
         return {
            ...state,
            followingProgress: action.payload.isFollowing
               ? [...state.followingProgress, action.payload.userID]
               : state.followingProgress.filter(userID => userID !== action.payload.userID)
         }
      }
      default: {
         return state;
      }
   }
}