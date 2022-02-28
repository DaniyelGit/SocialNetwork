export type ActionsTypesForProfile = ReturnType<typeof addPostAC>
    | ReturnType<typeof changeTextForInputAC>

type PostsDataType = { id: string, text: string, likesCount: number }

let initialState = {
    postsData: [
        {id: '1', text: 'Hi, how are you?', likesCount: 11},
        {id: '2', text: 'It\'s my first post', likesCount: 15},
    ] as Array<PostsDataType>,
    newPostText: '',
};

export type InitialProfileType = typeof initialState;

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

