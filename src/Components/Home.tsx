import { useAuth } from "../useAuth";
import Output from "./Output";
import Setup from "./Setup";

export default function Home() {

    const { viewPitch } = useAuth()
    
    return (
        <div className='p-4 pb-14'>
            {viewPitch ? <Output /> : <Setup />}
        </div>
    )
}
