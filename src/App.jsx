import {BrowserRouter, Routes, Route} from "react-router-dom";
import ToDoList from "./pages/toDoList/ToDoList";
import ShopList from "./pages/shopList/ShopList";
import RandomBG from "./pages/randomHexBG/RandomBG";
import RandomGradientBG from "./pages/randomGradientBG/RandomGradientBG";
import NumberGuess from "./pages/numberGuessGame/NumberGuess";
import HangmanGame from "./pages/hangmanGame/HangmanGame";

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
          <Route path='/guessnumber'>
            <Route index element={<NumberGuess />} />
          </Route>
          {/* <Route path='/hangman'>
            <Route index element={<HangmanGame />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
