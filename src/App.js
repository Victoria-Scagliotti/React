import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemList/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetail/ItemDetailContainer';
import CheckoutContainer from "./Components/FormCheckout/FormCheckoutContainer";
import CartContextProvider from "./Components/Context/CartContext";
import Cart from "./Components/Cart/Cart";

function App() {

  return (

    <BrowserRouter>
      <CartContextProvider>

        <Navbar/>

        <Routes>
          <Route path="/" element= {<ItemListContainer/>} />
          <Route path="/category/:categoryName" element={<ItemListContainer />} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element= {<Cart/>} />
          <Route path="/checkout" element= {<CheckoutContainer/>} />
          <Route path="*" element={<h1> error 404: Not found </h1>} />
        </Routes>

      </CartContextProvider>

    </BrowserRouter>

  );
}

export default App;
