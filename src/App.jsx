import {BrowserRouter, Routes, Route} from "react-router-dom";
import ToDoList from "./pages/toDoList/ToDoList";
import ShopList from "./pages/shopList/ShopList";
import RandomBG from "./pages/randomBG/RandomBG";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<ToDoList />} />
          </Route>
          <Route path='/shoplist'>
            <Route index element={<ShopList />} />
          </Route>
          <Route path='/randombg'>
            <Route index element={<RandomBG />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
