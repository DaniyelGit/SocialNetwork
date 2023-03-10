export const addPostAC = () => {
   return {
      type: "ADD-POST",
   } as const
};

export const updatePostTextAC = (postText: string) => {
   return {
      type: "UPDATE-POST-TEXT",
      payload: {
         postText: postText
      }
   } as const
};

export const updateMessageTextAC = (messageText: string) => {
   return {
      type: "UPDATE_MESSAGE-TEXT",
      payload: {
         messageText
      }
   } as const
}

export const addMessageAC = () => {
   return {
      type: "ADD-NEW-MESSAGE",
   } as const
}


export type ActionsType = ReturnType<typeof addPostAC>
   | ReturnType<typeof updatePostTextAC>
   | ReturnType<typeof updateMessageTextAC>
   | ReturnType<typeof addMessageAC>;