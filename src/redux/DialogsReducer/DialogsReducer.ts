export type ActionsTypesForDialogs =
    | ReturnType<typeof updateNewMessageTextAC>
    | ReturnType<typeof sendMessageAC>;

type MessagesDataType = {id: string, message: string};
export type MessagesPageType = {
    dialogsData: Array<{id: string, name: string}>
    messagesData: Array<MessagesDataType>
    newMessageText: string
}

let initialState: MessagesPageType = {
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

export const DialogsReducer = (state = initialState, action: ActionsTypesForDialogs) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-TEXT': {
            state.newMessageText = action.newMessageText;
            return state;
        }
        case 'SEND-MESSAGE': {
            const newMessageText: MessagesDataType = {id: '5', message: state.newMessageText};
            state.messagesData.push(newMessageText);
            state.newMessageText = '';
            return state;
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
