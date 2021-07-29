import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { init } from 'emailjs-com';

import './App.css';
import Home from './components/Home/Home';
import Template from './components/Template';
import Formdtrust from './components/dtrust/Formdtrust';
import UseControlKey from './components/ControlKey/UseControlKey';
import DestroyControlKey from './components/ControlKey/DestroyControlKey';
import Promote from './components/Promote/Promote';
import Tokenomics from './components/Tokenomics/Tokenomics';
import Legal from './components/Legal/Legal';
import Contact from './components/Contact/Contact';

init("user_y2e2B4RkPGGgKgzhsVXSG");

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Template>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/formdtrust" exact>
              <Formdtrust />
            </Route>
            <Route path="/usecontrolkey" exact>
              <UseControlKey />
            </Route>
            <Route path="/destroycontrolkey" exact>
              <DestroyControlKey />
            </Route>
            <Route path="/promote">
              <Promote />
            </Route>
            <Route path="/tokenomics" exact>
              <Tokenomics />
            </Route>
            <Route path="/legal" exact>
              <Legal />
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
