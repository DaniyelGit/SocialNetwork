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


export type actionsProfileType = ReturnType<typeof addPostAC>
| ReturnType<typeof updatePostTextAC>;