import "./App.css";
import Header from "../src/components/layouts/header";
import Populares from "./components/layouts/populares";
import Novedades from "./components/layouts/novedades";
import Ofertas from "./components/layouts/ofertas";
import Footer from "./components/layouts/footer";
import Form from "./components/layouts/form";
import Counter from "./components/layouts/usereducer";
import ImagesContainer from "./components/layouts/imageContainer";

function App() {
  return (
    <>
      <Header />
      <Counter />
      <ImagesContainer />
      <Populares />
      <Novedades />
      <Ofertas />
      <Form />
      <Footer />
    </>
  );
}

export default App;
