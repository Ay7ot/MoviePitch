import { AppActionInterface, AppContextInterface } from "./types";

export const appReducer = (state: AppContextInterface, action: AppActionInterface) => {
    switch (action.type) {
        case 'setPrompt':
            return {
                ...state,
                prompt: action.payload?.promptPayload ?? ''
            }
        case 'setSynopsis':
            return {
                ...state,
                synopsis: action.payload?.synopsisPayload ?? ''
            }
        case 'setActors':
            return {
                ...state,
                actors: action.payload?.actorsPayload ?? ''
            }
        case 'setTitle':
            return {
                ...state,
                title: action.payload?.titlePayload ?? ''
            }  
        case 'setImageDescription':
            return {
                ...state,
                imageDescription: action.payload?.imageDescriptionPayload ?? ''
            }
        case 'setImageUrl':
            return {
                ...state,
                imageUrl: action.payload?.imageUrlPayload ?? ''
            }
        case 'showPitch':
            return {
                ...state,
                viewPitch: true
            }
        case 'hidePitch':
            return {
                ...state,
                viewPitch: false
            }
        default:
            return state;
    }
}