import { Route, Routes } from "react-router"
import Home from "../pages/Home"
import BlogMenu from "../components/Blog"
import { Lease } from "../pages/Lease"
import { About } from "../pages/About"
import Xeber from "../pages/Xeber"
import Texnikalar from "../pages/Texnikalar"
import Homeali from "../pages/NEwhome"
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Homeali />} />
      <Route path="/texnikalar" element={<Texnikalar />} />
      <Route path="/blog" element={<BlogMenu />} />
      <Route path="/about" element={<About />} />
      <Route path="/icare" element={<Lease />} />
      <Route path="/blog/:id" element={<Xeber />} />
    </Routes>
  )
}
export default Routing

