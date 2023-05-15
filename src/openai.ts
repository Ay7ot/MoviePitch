import { Configuration, OpenAIApi } from "openai"
const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

export async function fetchText(maxTokens: number, prompt: string, temperature?: number){
    const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: prompt,
        max_tokens: maxTokens,
        temperature: temperature
    })

    const text = response.data.choices[0].text
    return text?.trim()
}

export async function fetchImage(prompt: string){
    const response = await openai.createImage({
        prompt: prompt,
        n: 1,
        response_format: 'url',
        size: '256x256'
    })

    const image = response.data.data[0].url
    return image
}
