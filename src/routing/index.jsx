import { Route, Routes } from "react-router"
import Home from "../pages/Home"
import BlogMenu from "../components/Blog"
import { Lease } from "../pages/Lease"
import { About } from "../pages/About"

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<BlogMenu />} />
      <Route path="/icare" element={<Lease />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}
export default Routing

