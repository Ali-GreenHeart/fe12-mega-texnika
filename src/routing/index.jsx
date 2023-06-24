import { Route, Routes } from "react-router"
import Home from "../pages/Home"
import BlogMenu from "../components/Blog"
import { Lease } from "../pages/Lease"
import { About } from "../pages/About"
import Xeber from "../pages/Xeber"

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<BlogMenu />} />
      <Route path="/about" element={<About />} />
      <Route path="/icare" element={<Lease />} />
      <Route path="/blog/:id" element={<Xeber />} />
    </Routes>
  )
}
export default Routing

