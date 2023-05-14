import Footer from "./Footer";
import {Routes, Route} from 'react-router-dom'
import Library from "./Library";
import Home from "./Home";

export default function Body() {
  return (
    <main className="grid place-content-center h-[90.1vh]">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/library" element={<Library />} />
        </Routes>
      <Footer />
    </main>
  )
}
