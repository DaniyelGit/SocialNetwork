export type ActionsTypesForProfile = ReturnType<typeof addPostAC>
    | ReturnType<typeof changeTextForInputAC>
    | ReturnType<typeof setUserProfile>

type PostsDataType = { id: string, text: string, likesCount: number }


export type InitialProfileType = {
    postsData: Array<PostsDataType>
    newPostText: string
    profileUser: any
}

let initialState: InitialProfileType = {
    postsData: [
        {id: '1', text: 'Hi, how are you?', likesCount: 11},
        {id: '2', text: 'It\'s my first post', likesCount: 15},
    ],
    newPostText: '',
    profileUser: null
};


export const ProfileReducer = (state: InitialProfileType = initialState, action: ActionsTypesForProfile): InitialProfileType => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost: PostsDataType = {id: '3', text: state.newPostText, likesCount: 0};
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            };
        }
        case 'CHANGE-TEXT-INPUT': {
            return {...state, newPostText: action.newPostText};
        }
        case 'SET_USER_PROFILE': {
            return {...state, profileUser: action.user}
        }
        default: {
            return state;
        }
    }
}


export const addPostAC = () => { // add post
    return {
        type: 'ADD-POST'
    } as const
}

export const changeTextForInputAC = (newPostText: string) => { // change text in input
    return {
        type: 'CHANGE-TEXT-INPUT',
        newPostText: newPostText
    } as const
}

export const setUserProfile = (user: null) => {
    return {
        type: 'SET_USER_PROFILE',
        user,
    } as const
}

