import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import ConsumiendoApis from "./ConsumiendoApis/ConsumiendoApis";

function App() {

  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={'Hola Fanáticos!!!'}/>
    </div>

  );
}

export default App;
