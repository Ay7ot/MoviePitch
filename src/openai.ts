import { Configuration, OpenAIApi } from "openai"
const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

export async function fetchText(maxTokens: number, prompt: string){
    const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: prompt,
        max_tokens: maxTokens
    })

    const text = response.data.choices[0].text
    return text
}
