import { AppActionInterface, AppContextInterface } from "./types";

export const appReducer = (state: AppContextInterface, action: AppActionInterface) => {
    switch (action.type) {
        case 'setPrompt':
            return {
                ...state,
                prompt: action.payload?.promptPayload ?? ''
            }
        default:
            return state;
    }
}