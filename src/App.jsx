import GlobalStyle from "./styles/GlobalStyle";
import { ToastContainer } from "react-toastify";
import Router from "./Routes";
import "react-toastify/dist/ReactToastify.min.css";
import { Slide } from 'react-toastify';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
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
