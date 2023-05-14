import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-[#242526] flex justify-center items-center gap-[0.3em] py-4 sticky top-0">
        <img src="logo-movie.png" className="h-[26px]"/>
        <Link to='/'>
            <span className="text-white text-2xl font-bold">Movie</span>
            <span className="text-white text-2xl ">Pitch</span>
        </Link >
    </header>
  )
}
