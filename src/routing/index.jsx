import { Route, Routes } from "react-router"
import Home from "../pages/Home"
import Texnikalar from '../pages/Texnikalar'

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/texnikalar"  element={<Texnikalar/>}/>
        </Routes>
    )
}
export default Routing
