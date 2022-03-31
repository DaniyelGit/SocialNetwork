type ActionsTypesForDialogs = ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setUsersCount>
    | ReturnType<typeof toggleIsFetching>;


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
    isFetching: boolean
}

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
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
        case 'TOGGLE_IS_FETCHING': {
            return {
                ...state,
                isFetching: action.toggleValue,
            }
        }
        default: {
            return state
        }
    }
}


export const follow = (idUser: string) => {
    return {
        type: 'FOLLOWED',
        idUser
    } as const
}

export const unFollow = (idUser: string) => {
    return {
        type: 'UNFOLLOWED',
        idUser
    } as const
}

export const setUsers = (users: UserType[]) => {
    return {
        type: 'SET_USERS',
        users
    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET_CURRENT_PAGE',
        currentPage,
    } as const
}

export const setUsersCount = (countUsers: number) => {
    return {
        type: 'SET_USERS_COUNT',
        countUsers,
    } as const
}

export const toggleIsFetching = (toggleValue: boolean) => {
    return {
        type: 'TOGGLE_IS_FETCHING',
        toggleValue
    } as const
}