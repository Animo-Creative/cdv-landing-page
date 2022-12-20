import BlocksResistanceComponent from "../../components/BlocksResistance";
import { motion } from "framer-motion";
import FooterComponent from "../../components/Footer";

function Products() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <BlocksResistanceComponent />
        <FooterComponent/>
      </div>
    </motion.div>
  );
}

export default Products;
