export interface AppContextInterface {
    theme: string,
    dispatch: React.Dispatch<AppActionInterface>,
    prompt: string
}

export type AppActionInterface = {
    type: string,
    payload? : {
        themePayload?: string,
        promptPayload: string;
    }
}