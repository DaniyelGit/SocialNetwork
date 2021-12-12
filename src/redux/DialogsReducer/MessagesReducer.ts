export type ActionsTypesForDialogs =
    | ReturnType<typeof updateNewMessageTextAC>
    | ReturnType<typeof sendMessageAC>;

export type MessagesDataType = {
    id: string,
    message: string
};
export type DialogsDataType = {
    id: string,
    name: string
}

let initialState = {
    dialogsData: [
        {id: '1', name: 'Daniyel'},
        {id: '2', name: 'Zhenya'},
        {id: '3', name: 'Artur'},
        {id: '4', name: 'Vadim'},
    ] as Array<DialogsDataType>,
    messagesData: [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'How is your it-kamasutra?'},
        {id: '3', message: 'Yo bro'},
        {id: '4', message: 'Hi man!'},
    ] as Array<MessagesDataType>,
    newMessageText: '',
}

export type InitialStateType = typeof initialState;

export const MessagesReducer = (state: InitialStateType = initialState, action: ActionsTypesForDialogs): InitialStateType => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-TEXT': {
            // state.newMessageText = action.newMessageText;
            // return state;
            return {...state, newMessageText: action.newMessageText};
        }
        case 'SEND-MESSAGE': {
            const newMessage: MessagesDataType = {id: '5', message: state.newMessageText};
            // state.messagesData.push(newMessageText);
            // state.newMessageText = '';
            // return state;
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                newMessageText: ''
            };
        }
        default: {
            return state;
        }
    }
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
