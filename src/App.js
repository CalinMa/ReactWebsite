
import './App.css';
import WebsiteApp from "./Components/WebsiteApp";
import Page from "./Components/ReactHeader";
import Footer from "./Components/Footer";
import ReactLogo from "./Components/ReactLogo";
import {Route,Switch} from "react-router-dom";
import About from "./Components/About";
import CV from "./Components/CV";
import Portfolio from "./Components/Portfolio";
import { BrowserRouter as Router, Link } from "react-router-dom";

function App() {
  return (
      <div>
          <Page/>
          <WebsiteApp/>
          <ReactLogo/>
          <Router>
              <Switch>
                  <Route path='/'>

                  </Route>
                  <Route path='/about'>
                      <About/>
                  </Route>
                  <Route path='/cv'>
                      <CV/>
                  </Route>
                  <Route path='/portfolio'>
                      <Portfolio/>
                  </Route>
              </Switch>
          </Router>
          <Footer/>
      </div>
  );
}

export default App;
