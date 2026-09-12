import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./MainHeros/Nav";
import MainContent from "./MainHeros/MainContent";
import Footer from "./MainHeros/Footer";

function App() {
  return (
    <>
      <Nav />
      <MainContent />
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    </>
  );
}

export default App;