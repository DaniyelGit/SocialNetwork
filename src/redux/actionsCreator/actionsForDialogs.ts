export const addMessage = (newMessageBody: string) => {
   return {
      type: "ADD-NEW-MESSAGE",
      newMessageBody,
   } as const
}


export type actionsDialogsType = ReturnType<typeof addMessage>;