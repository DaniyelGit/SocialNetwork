import {AppThunkType} from "../store/store";
import {getAuthUserData} from "./actionsForAuth";

export const setInitializedSuccess = () => {
   return {
      type: 'SET_INITIALIZED'
   } as const;
};


// thunks
export const initializeApp = (): AppThunkType => (dispatch) => {
   dispatch(getAuthUserData())
      .then(() => {
         dispatch(setInitializedSuccess());
      })
};

// types
export type ActionsAppType = ReturnType<typeof setInitializedSuccess>;