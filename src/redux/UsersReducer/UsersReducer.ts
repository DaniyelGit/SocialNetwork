type ActionsTypesForDialogs = ReturnType<typeof followedAC>
    | ReturnType<typeof unFollowedAC>
    | ReturnType<typeof setUsersAC>;


export type UserType = {
    id: string,
    photoUrl: string,
    followed: boolean,
    fullName: string,
    status: string,
    location: { city: string, country: string }
}

let initialState = {
    users: [] as Array<UserType>
}

export type initialUsersType = typeof initialState;

export const UsersReducer = (state: initialUsersType = initialState, action: ActionsTypesForDialogs): initialUsersType => {
    switch (action.type) {
        case 'FOLLOWED': {
            return {...state, users: state.users.map(u => u.id === action.idUser ? {...u, followed: true} : u)}
        }
        case 'UNFOLLOWED': {
            return {...state, users: state.users.map(u => u.id === action.idUser ? {...u, followed: false} : u)}
        }
        case 'SET_USERS': {
            return {...state, users: [...state.users, ...action.users]}
        }
        default: {
            return state
        }
    }
}


export const followedAC = (idUser: string) => {
    return {
        type: 'FOLLOWED',
        idUser
    } as const
}

export const unFollowedAC = (idUser: string) => {
    return {
        type: 'UNFOLLOWED',
        idUser
    } as const
}

export const setUsersAC = (users: UserType[]) => {
    return {
        type: 'SET_USERS',
        users
    } as const
}