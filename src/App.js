import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar";
<<<<<<< HEAD
import ConsumiendoApis from "./ConsumiendoApis/ConsumiendoApis";
=======
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./Components/Cart/Cart";
>>>>>>> 035d6c2dc394850679039ef1cf12d9f10d1a53d8

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element= {<ItemListContainer/>} />
        <Route path="/category/:categoryName" element={<ItemListContainer />} />
        <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element= {<Cart/>} />
        <Route path="*" element={<h1> error 404: Not found </h1>} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;
