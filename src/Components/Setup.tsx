import { useState  } from "react"
import { useAuth } from "../useAuth"
import { fetchImage, fetchText } from "../openai"

export default function Setup() {

    const { prompt, dispatch, synopsis, title, movieBossText, showPitchButton } = useAuth()

    const[loading, setLoading] = useState(false);

    async function getMoviePrompt(text: string){
        
        dispatch({
            type: 'setMovieBossText',
            payload: {
                movieBossTextPayload: '. . . . . . '
            }
        })

        const moviePrompt = `
        Generate a short message to enthusiastically say an outline sounds interesting and that you need some minutes to think about it.
        ###
        outline: Two dogs fall in love and move to Hawaii to learn to surf.
        message: I'll need to think about that. But your idea is amazing! I love the bit about Hawaii!
        ###
        outline: A plane crashes in the jungle and the passengers have to walk 1000km to safety.
        message: I'll spend a few moments considering that. But I love your idea!! A disaster movie in the jungle!
        ###
        outline: A group of corrupt lawyers try to send an innocent woman to jail.
        message: Wow that is awesome! Corrupt lawyers, huh? Give me a few moments to think!
        ###
        outline: ${text}
        message:
        `
        const response = await fetchText(50, moviePrompt)
        if(response){

            dispatch({
                type: 'setMovieBossText',
                payload: {
                    movieBossTextPayload: response
                }
            })
        }

        dispatch({
            type: 'setPrompt',
            payload: {
                promptPayload: ''
            }
        })
    }

    async function getSynopsis(text: string){

        setLoading(true)
        const movieSynopsisPrompt = `Generate an engaging, professional and marketable movie synopsis based on an outline. Add actors to play the characters
        ###
        outline: A big-headed daredevil fighter pilot goes back to school only to be sent on a deadly mission.
        synopsis: The Top Gun Naval Fighter Weapons School is where the best of the best train to refine their elite flying skills. When hotshot fighter pilot Maverick (Tom Cruise) is sent to the school, his reckless attitude and cocky demeanor put him at odds with the other pilots, especially the cool and collected Iceman (Val Kilmer). But Maverick isn't only competing to be the top fighter pilot, he's also fighting for the attention of his beautiful flight instructor, Charlotte Blackwood (Kelly McGillis). Maverick gradually earns the respect of his instructors and peers - and also the love of Charlotte, but struggles to balance his personal and professional life. As the pilots prepare for a mission against a foreign enemy, Maverick must confront his own demons and overcome the tragedies rooted deep in his past to become the best fighter pilot and return from the mission triumphant.
        ###
        outline: ${text}
        synopsis: 
        `
        const response = await fetchText(700, movieSynopsisPrompt)
        
        dispatch({
            type: 'setSynopsis',
            payload: {
                synopsisPayload: response
            }
        })
        if(response){
            getActors(response)
            getTitle(response)
            getImagePrompt()
        }
    }

    async function getActors(text: string){

        const actorsPrompt = `
            Extract the list of actors from ${text} which are in the brackets

            return it in the format of only the actors names separated by a comma
        `
        const response = await fetchText(150, actorsPrompt)
        
        dispatch({
            type: 'setActors',
            payload: {
                actorsPayload: response
            }
        })
    }

    async function getTitle(text: string){

        const titlePrompt = `
            Generate a title of not more than 10 words for the following movie synopsis. ${text}. Don't add quotation marks to the title
        `
        const response = await  fetchText(25, titlePrompt, 0.7)
       
        dispatch({
            type: 'setTitle',
            payload: {
                titlePayload: response
            }
        })
    }

    async function getImagePrompt(){

        const imagePrompt = `Give a short description of an image which could be used to advertise a movie based on a title and synopsis. The description should be rich in visual detail but contain no names.
        ###
        title: Love's Time Warp
        synopsis: When scientist and time traveller Wendy (Emma Watson) is sent back to the 1920s to assassinate a future dictator, she never expected to fall in love with them. As Wendy infiltrates the dictator's inner circle, she soon finds herself torn between her mission and her growing feelings for the leader (Brie Larson). With the help of a mysterious stranger from the future (Josh Brolin), Wendy must decide whether to carry out her mission or follow her heart. But the choices she makes in the 1920s will have far-reaching consequences that reverberate through the ages.
        image description: A silhouetted figure stands in the shadows of a 1920s speakeasy, her face turned away from the camera. In the background, two people are dancing in the dim light, one wearing a flapper-style dress and the other wearing a dapper suit. A semi-transparent image of war is super-imposed over the scene.
        ###
        title: zero Earth
        synopsis: When bodyguard Kob (Daniel Radcliffe) is recruited by the United Nations to save planet Earth from the sinister Simm (John Malkovich), an alien lord with a plan to take over the world, he reluctantly accepts the challenge. With the help of his loyal sidekick, a brave and resourceful hamster named Gizmo (Gaten Matarazzo), Kob embarks on a perilous mission to destroy Simm. Along the way, he discovers a newfound courage and strength as he battles Simm's merciless forces. With the fate of the world in his hands, Kob must find a way to defeat the alien lord and save the planet.
        image description: A tired and bloodied bodyguard and hamster standing atop a tall skyscraper, looking out over a vibrant cityscape, with a rainbow in the sky above them.
        ###
        title: ${title}
        synopsis: ${synopsis}
        image description: 
        `
        const response = await fetchText(100, imagePrompt)
        
        dispatch({
            type: 'setImageDescription',
            payload: {
                imageDescriptionPayload: response
            }
        })
        
        if(response){
            getImageUrl(response)
        }
    }

    async function getImageUrl(text: string){

        const imageGenerativePrompt = `
        ${text}. There should be no text in this image.
        `
        const response = await fetchImage(imageGenerativePrompt)

        dispatch({
            type: 'setImageUrl',
            payload: {
                imageUrlPayload: response
            }
        })
        
        dispatch({
            type: 'setMovieBossText',
            payload: {
                movieBossTextPayload: `This idea is so good I'm jealous! It's gonna make you rich for sure! Remember, I want 10% 💰`
            }
        })
       
        setLoading(false)
       
        dispatch({
            type: 'setShowPitchButton',
            payload: {
                showPitchButtonPayload: true
            }
        })
    }

    function InputAndPitch(){

        if(showPitchButton){
            return (
                <div className="grid place-content-center">
                    <button
                        className="p-4 mb-4 rounded-lg font-bold text-white tracking-wide text-xl"
                        onClick={()=>{
                            dispatch({
                                type: 'showPitch'
                            })
                        }}
                    >
                        View Pitch
                    </button>
                </div>
            )
        }else {
            return (
                <div className="setup-inner setup-input-container" id="setup-input-container">
                    <textarea 
                        onChange={(e)=>{
                            dispatch({
                                type: 'setPrompt',
                                payload: {
                                    promptPayload: e.target.value
                                }
                            })
                        }}
                        value={prompt}
                        id="setup-textarea" 
                        placeholder="An evil genius wants to take over the world using AI."
                    />
                    <button className="send-btn" id="send-btn" aria-label="send" 
                        onClick={()=>{
                            getMoviePrompt(prompt)
                            getSynopsis(prompt)
                        }}
                    >
                        <img src="send-btn-icon.png" alt="send"/>
                    </button>
                </div>
            )
        }
    }

    return (
        <section id="setup-container">
            <div className="setup-inner">
                <img src="movieboss.png"/>
                <div className="speech-bubble-ai" id="speech-bubble-ai">
                    <p id="movie-boss-text">
                        {movieBossText}
                    </p>
                </div>
            </div>
            {loading ? 
            <div className="grid place-content-center mb-10">
                <img src="loading.svg"/>
            </div>
            : 
            InputAndPitch()
            }
        </section>
    )
}
