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