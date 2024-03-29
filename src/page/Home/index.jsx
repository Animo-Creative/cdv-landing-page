import AboutComponent from "../../components/About";
import BlocksStrategyComponent from "../../components/BlocksStrategy";
import { motion } from "framer-motion";
import FormComponent from "../../components/Form";
import FooterComponent from "../../components/Footer";

function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <FormComponent />
        <AboutComponent />
        <BlocksStrategyComponent />
        <FooterComponent/>
      </div>
    </motion.div>
  );
}

export default HomePage;
