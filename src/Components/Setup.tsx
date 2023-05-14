import { useAuth } from "../useAuth"

export default function Setup() {

    const {prompt, dispatch} = useAuth()
  return (
    <section id="setup-container">
        <div className="setup-inner">
            <img src="movieboss.png"/>
            <div className="speech-bubble-ai" id="speech-bubble-ai">
                <p id="movie-boss-text">
                    Give me a one-sentence concept and I'll give you an eye-catching title, a synopsis the studios will love, a movie poster...
                    AND choose the cast!
                </p>
            </div>
        </div>
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
            <button className="send-btn" id="send-btn" aria-label="send">
                <img src="send-btn-icon.png" alt="send"/>
            </button>
        </div>
    </section>
  )
}
