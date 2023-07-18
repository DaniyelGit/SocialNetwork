import {ActionsAppType} from "../actionsCreator/actionsForApp";


const initialState = {
   initialized: false
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsAppType): InitialStateType => {
   switch (action.type) {
      case 'SET_INITIALIZED': {
         return {
            ...state,
            initialized: true,
         }
      }
      default: {
         return state;
      }
   }
}


// types
export type InitialStateType = typeof initialState;