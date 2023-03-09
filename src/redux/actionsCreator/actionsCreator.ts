export const addPostAC = () => {
   return {
      type: "ADD-POST",
   } as const
};

export const updatePostTextAC = (postText: string) => {
   return {
      type: "UPDATE-POST-TEXT",
      payload: {
         postText
      }
   } as const
};

export type ActionsType = ReturnType<typeof addPostAC>
   | ReturnType<typeof updatePostTextAC>;