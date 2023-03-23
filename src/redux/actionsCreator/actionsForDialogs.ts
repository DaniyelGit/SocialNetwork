export const updateMessageTextAC = (messageText: string) => {
   return {
      type: "UPDATE_MESSAGE-TEXT",
      payload: messageText
   } as const
}

export const addMessageAC = () => {
   return {
      type: "ADD-NEW-MESSAGE",
   } as const
}


export type actionsDialogsType = ReturnType<typeof updateMessageTextAC>
| ReturnType<typeof addMessageAC>;