export interface AppContextInterface {
    dispatch: React.Dispatch<AppActionInterface>,
    prompt: string,
    synopsis: string,
    actors: string,
    title: string,
    imageDescription: string,
    imageUrl: string,
    viewPitch: boolean
}

export type AppActionInterface = {
    type: string,
    payload? : {
        promptPayload?: string;
        synopsisPayload?: string;
        actorsPayload?: string;
        titlePayload?: string;
        imageDescriptionPayload?: string;
        imageUrlPayload?: string;
    }
}