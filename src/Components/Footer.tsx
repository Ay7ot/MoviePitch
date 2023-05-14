import {IoLibrarySharp, IoHomeSharp} from 'react-icons/io5'
import {HiHomeModern} from 'react-icons/hi2'
import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="fixed bottom-0 flex py-4 bg-[#242526] gap-32 w-full items-center justify-center rounded-t-lg">
        <Link to='/'>
            <i className='font-bold text-3xl text-white'>
                <HiHomeModern />
            </i>
        </Link>
        <Link to ='/library'>
            <i className='font-bold text-3xl text-white'>
                <IoLibrarySharp />
            </i>
        </Link>
    </footer>
  )
}
