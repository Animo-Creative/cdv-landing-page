import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HeaderComponent from "../components/Header";
import Products from "../page/Products";
import HomePage from "../page/Home";
import Contact from "../page/Contact";

export default function Router() {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<HeaderComponent />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/produtos" element={<Products />} />
          <Route path="/contato" element={<Contact />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
