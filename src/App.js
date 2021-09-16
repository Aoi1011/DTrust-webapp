import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { init } from 'emailjs-com';
import axios from 'axios';

import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Home from './components/Home/Home';
import Template from './components/Template';
import Start from './components/Start/Start';
import Formdtrust from './components/dtrust/Formdtrust';
import UseControlKey from './components/ControlKey/UseControlKey';
import DestroyControlKey from './components/ControlKey/DestroyControlKey';
import Promote from './components/Promote/Promote';
import AddYourFunds from './components/DigitalAssets/AddYourFunds';
import GiveYourFunds from './components/DigitalAssets/GiveYourFunds';
import Contact from './components/Contact/Contact';

init('user_y2e2B4RkPGGgKgzhsVXSG');

axios.defaults.baseURL = 'http://localhost:8080';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Template>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/aboutus" exact>
              <AboutUs />
            </Route>
            <Route path="/start" exact>
              <Start />
            </Route>
            <Route path="/formdtrust" exact>
              <Formdtrust />
            </Route>
            <Route path="/usecontrolkey" exact>
              <UseControlKey />
            </Route>
            <Route path="/addyourfunds" exact>
              <AddYourFunds />
            </Route>
            <Route path="/giveyourfunds" exact>
              <GiveYourFunds />
            </Route>
            <Route path="/destroycontrolkey" exact>
              <DestroyControlKey />
            </Route>
            <Route path="/promote">
              <Promote />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
          </Switch>
        </Template>
      </BrowserRouter>
    </div>
  );
}

export default App;
