export type StoreType = {
    _state: RootStateType
    _changeRenderTree: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof changeTextForInputAC>
    | ReturnType<typeof updateNewMessageTextAC>
    | ReturnType<typeof sendMessageAC>;



export const store: StoreType = {
    _state: {
        profilePage: {
            postsData: [
                {id: '1', text: 'Hi, how are you?', likesCount: 11},
                {id: '2', text: 'It\'s my first post', likesCount: 15},
            ],
            newPostText: '',
        },
        messagesPage: {
            dialogsData: [
                {id: '1', name: 'Daniyel'},
                {id: '2', name: 'Zhenya'},
                {id: '3', name: 'Artur'},
                {id: '4', name: 'Vadim'},
            ],
            messagesData: [
                {id: '1', message: 'Hi'},
                {id: '2', message: 'How is your it-kamasutra?'},
                {id: '3', message: 'Yo bro'},
                {id: '4', message: 'Hi man!'},
            ],
            newMessageText: '',
        }
    },
    _changeRenderTree() {
        console.log('state changed')
    },
    subscribe(observer) {
        this._changeRenderTree = observer;
    },
    getState() {
        return this._state;
    },
    dispatch(action: ActionsTypes) {
        if (action.type === 'ADD-POST') {
            const newPost: PostsDataType = {id: '5', text: this._state.profilePage.newPostText, likesCount: 0};
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._changeRenderTree();
        }
        else if (action.type === 'CHANGE-TEXT-INPUT') {
            this._state.profilePage.newPostText = action.newPostText;
            this._changeRenderTree();
        }
        else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.messagesPage.newMessageText = action.newMessageText;
            this._changeRenderTree();
        }
        else if (action.type === 'SEND-MESSAGE') {
            const newMessageText: MessagesDataType = {id: '5', message: this._state.messagesPage.newMessageText};
            this._state.messagesPage.messagesData.push(newMessageText);
            this._state.messagesPage.newMessageText = '';
            this._changeRenderTree();
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

export const updateNewMessageTextAC = (newMessageText: string) => { // change text in message
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newMessageText,
    } as const
}

export const sendMessageAC = () => { // send message: AC str: 87;
    return {
        type: 'SEND-MESSAGE',
    } as const
}



export type PostsDataType = {
    id: string,
    text: string,
    likesCount: number
} // type PostsData
export type DialogsDataType = {
    id: string,
    name: string
} // type DialogsData
export type MessagesDataType = {
    id: string,
    message: string
} // type MessagesData

export type ProfilePageType = {
    postsData: Array<PostsDataType>
    newPostText: string;
}
export type MessagesPageType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
    newMessageText: string
}

export type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
} // Root STATE type



