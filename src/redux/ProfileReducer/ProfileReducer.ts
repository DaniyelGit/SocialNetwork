export type ActionsTypesForProfile = ReturnType<typeof addPostAC>
    | ReturnType<typeof changeTextForInputAC>

export type PostsDataType = {id: string, text: string, likesCount: number}
export type ProfilePageType = {
    postsData: Array<PostsDataType>
    newPostText: string
}

let initialState: ProfilePageType = {
    postsData: [
        {id: '1', text: 'Hi, how are you?', likesCount: 11},
        {id: '2', text: 'It\'s my first post', likesCount: 15},
    ],
    newPostText: '',
};

export const ProfileReducer = (state = initialState, action: ActionsTypesForProfile) => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost: PostsDataType = {id: '5', text: state.newPostText, likesCount: 0};
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
        }
        case 'CHANGE-TEXT-INPUT': {
            state.newPostText = action.newPostText;
            return state;
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

