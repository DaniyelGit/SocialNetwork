type ActionsTypesForDialogs = ReturnType<typeof followedAC>
    | ReturnType<typeof unFollowedAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setUsersCountAC>;


export type UserType = {
    id: string
    name: string
    uniqueUrlName: null
    photos: {
        small: string,
        large: string
    }
    status: null,
    followed: boolean
}

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
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
            return {...state, users: action.users}
        }
        case 'SET_CURRENT_PAGE': {
            return {
                ...state,
                currentPage: action.currentPage,
            }
        }
        case 'SET_USERS_COUNT': {
            return {
                ...state,
                totalUsersCount: action.countUsers,
            }
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

export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET_CURRENT_PAGE',
        currentPage,
    } as const
}

export const setUsersCountAC = (countUsers: number) => {
    return {
        type: 'SET_USERS_COUNT',
        countUsers,
    } as const
}