import {actionsUsersType} from "../actionsCreator/actionsForUsers";

type LocationType = {
   city: string
   country: string
};
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
            users: [...state.users, ...action.payload]
         }
      }
      default: {
         return state;
      }
   }
}