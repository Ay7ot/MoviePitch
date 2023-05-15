import { useAuth } from "../useAuth"

export default function Output() {

    const { synopsis, title, actors, imageUrl, dispatch } = useAuth()
    return (
        <section className="output-container" id="output-container">
            <div id="output-img-container" className="output-img-container">
                <img src={imageUrl} className="w-full"/>
            </div>
            <h1 id="output-title" className="mt-4 font-bold text-3xl tracking-wide">{title}</h1>
            <h2 id="output-stars" className="mt-4 font-semibold text-lg">{actors}</h2>
            <p id="output-text" className="mt-4">{synopsis}</p>
            <div className="grid place-content-center">
                    <button
                        className="mt-4 p-4 mb-4 rounded-lg font-bold text-white tracking-wide text-xl"
                        onClick={()=>{
                            dispatch({
                                type: 'hidePitch'
                            })
                        }}
                    >
                        Hide Pitch
                    </button>
                    <button className="mt-4 p-4 mb-4 rounded-lg font-bold text-white tracking-wide text-xl">
                        Save Pitch
                    </button>
                </div>
        </section>
    )
}
