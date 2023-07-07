import { Route, Routes } from "react-router"
import Home from "../pages/Home"
import BlogMenu from "../components/Blog"
import { Lease } from "../pages/Lease"
import { About } from "../pages/About"
import Xeber from "../pages/Xeber"
import Texnikalar from "../pages/Texnikalar"
import Homeali from "../pages/NEwhome"
import TexnikalarSingle from "../pages/TexnikalarSingle"
import Contact from "../pages/Contact"
import ScrollToTop from "../components/ScrollToTop"

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newhome" element={<Homeali />} />
        <Route path="/texnikalar" element={<Texnikalar />} />
        <Route path="/texnikalar/:id" element={<TexnikalarSingle />} />
        <Route path="/blog" element={<BlogMenu />} />
        <Route path="/about" element={<About />} />
        <Route path="/icare" element={<Lease />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/:id" element={<Xeber />} />
      </Routes>
      <ScrollToTop />
    </>
  )
}
export default Routing

