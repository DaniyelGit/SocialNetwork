import {actionsUsersType} from "../actionsCreator/actionsForUsers";

type LocationType = {
   city: string
   country: string
};
export type UserType = {
   id: number
   fullName: string
   status: string
   photoUrl: string
   location: LocationType
   isFollow: boolean
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
               ? {...u, isFollow: true}
               : u)
         };
      }
      case "UNFOLLOW-USER": {
         return {
            ...state,
            users: state.users.map(u => u.id === action.payload
               ? {...u, isFollow: false}
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