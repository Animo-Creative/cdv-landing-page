import AboutComponent from "../../components/About";
import FooterComponent from "../../components/Footer";
import FormComponent from "../../components/Form";
import HeaderComponent from "../../components/Header";
import WhereAreWeComponent from "../../components/WhereAreWe";


function Home() {
  return (
    <div>
      <HeaderComponent/>
      <FormComponent/>
      <AboutComponent/>
      <WhereAreWeComponent/>
      <FooterComponent/>
    </div>
  );
}

export default Home;