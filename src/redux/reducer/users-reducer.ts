type LocationType = {
   city: string
   country: string
};
type UserType = {
   id: number
   fullName: string
   status: string
   location: LocationType
   isFollow: boolean
};

export type InitialStateUsersPageType = typeof InitialStateUsersPage;

const InitialStateUsersPage = {
   users: [
      {
         id: 1,
         fullName: 'Daniyel',
         status: 'I am a boss',
         location: {city: 'Ostrovets', country: 'Belarus'},
         isFollow: true
      },
      {
         id: 2,
         fullName: 'Victoria',
         status: 'Hi all !',
         location: {city: 'Ostrovets', country: 'Belarus'},
         isFollow: false
      },
      {id: 3, fullName: 'Andrey', status: 'I love music', location: {city: 'Lida', country: 'Belarus'}, isFollow: true},
      {
         id: 4,
         fullName: 'Theresa',
         status: 'I want to travel',
         location: {city: 'Radun', country: 'Belarus'},
         isFollow: false
      },
   ] as UserType[],
}

export const usersReducer = (state: InitialStateUsersPageType, action: any): InitialStateUsersPageType => {
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