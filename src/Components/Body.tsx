import Footer from "./Footer";
import {Routes, Route} from 'react-router-dom'
import Home from "./Home";

export default function Body() {
  return (
    <main className="grid place-content-center min-h-[90.1vh]">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
    </main>
  )
}
