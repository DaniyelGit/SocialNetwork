export const updateMessageText = (messageText: string) => {
   return {
      type: "UPDATE_MESSAGE-TEXT",
      payload: messageText
   } as const
}

export const addMessage = () => {
   return {
      type: "ADD-NEW-MESSAGE",
   } as const
}


export type actionsDialogsType = ReturnType<typeof updateMessageText>
| ReturnType<typeof addMessage>;