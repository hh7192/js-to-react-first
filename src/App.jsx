import {BrowserRouter, Routes, Route} from "react-router-dom";
import ToDoList from "./pages/toDoList/ToDoList";
import ShopList from "./pages/shopList/ShopList";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<ToDoList />} />
          </Route>
          <Route path='/ShopList'>
            <Route index element={<ShopList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
