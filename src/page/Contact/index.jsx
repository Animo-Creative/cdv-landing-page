import ContactUs from "../../components/ContactUs";
import { motion } from "framer-motion";
import FooterComponent from "../../components/Footer";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <ContactUs />
        <FooterComponent/>
      </div>
    </motion.div>
  );
}

export default Contact;
