import AboutComponent from "../../components/About";
import FooterComponent from "../../components/Footer";
import FormComponent from "../../components/Form";
import HeaderComponent from "../../components/Header";


function Home() {
  return (
    <div>
      <HeaderComponent/>
      <FormComponent/>
      <AboutComponent/>
      <FooterComponent/>
    </div>
  );
}

export default Home;