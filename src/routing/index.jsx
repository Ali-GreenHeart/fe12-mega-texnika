import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import { Lease } from "../pages/Lease";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/icare" element={<Lease />} />
    </Routes>
  );
};
export default Routing;
