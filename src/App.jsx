import Home from "../src/page/Home/index";
import GlobalStyle from "./styles/GlobalStyle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { Slide } from 'react-toastify';

function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
      <ToastContainer
        theme="light"
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
      />
    </>
  );
}

export default App;
