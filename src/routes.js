import react from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, 
    Outlet
  } from "react-router-dom";
  import Grid1 from './components/grid1.js';
  import Grid2 from './components/grid2.js';
  import Grid3 from './components/grid3.js';
  import Grid4 from './components/grid4.js';
  import Grid5 from './components/grid5.js';
  export default function Routeconfig() {
    return (
        <div>
            <Router>
              <nav>
                 <link to="/">Grid1</link>
              </nav>
                <Switch>
                   
                   <Route exact path= "/" components={Grid1} /> 
                   <Route path= "/grid2" components={Grid2} /> 
                   <Route path= "/grid3" components={Grid3} /> 
                   <Route path= "/grid4" components={Grid4} /> 
                   <Route path= "/:id" components={Grid5} /> 
                   
                </Switch>
            </Router>
        </div>

        
  );
}







