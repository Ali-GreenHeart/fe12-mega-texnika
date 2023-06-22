import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Texnikalar from "../pages/Texnikalar";
import Contact from "../pages/Elaqe";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/texnikalar" element={<Texnikalar />} />
      <Route path="/elaqe" element={<Contact />} />
    </Routes>
  );
};
export default Routing;
