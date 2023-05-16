import Home from './pages/Home/Home';
import Order from './pages/Order/Order';
import Menu from './pages/Menu/Menu';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuView from './pages/MenuView/MenuView';
import Feedback from './pages/Feedback/Feedback';
import BonAppetit from './pages/BonAppetit/BonAppetit';

function App() {
  return (

    <div className="App">
      <Router>

        <Routes>
          <Route path="/" element={
            <div>
              <Home/>
            </div>
          }/>

        <Route path="/order"  
              element={
                <div>
                  <Order/>
                </div>
              }
          />

        <Route path="/order/menu-view"  
              element={
                <div>
                  <MenuView/>
                </div>
              }
          />

        <Route path="/menu"  
              element={
                <div>
                  <Menu/>
                </div>
              }
          />
        
        <Route path="/menu/bon-appetit"  
              element={
                <div>
                  <BonAppetit/>
                </div>
              }
          />

        <Route path="/feedback"  
              element={
                <div>
                  <Feedback/>
                </div>
              }
          />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
