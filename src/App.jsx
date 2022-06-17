import {BrowserRouter, Routes, Route} from "react-router-dom";
import ToDoList from "./pages/toDoList/ToDoList";
import ShopList from "./pages/shopList/ShopList";
import RandomBG from "./pages/randomBG/RandomBG";
import RandomGradientBG from "./pages/randomGradientBG/RandomGradientBG";

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
          <Route path='/randomhexbg'>
            <Route index element={<RandomBG />} />
          </Route>
          <Route path='/randomgradientbg'>
            <Route index element={<RandomGradientBG />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
