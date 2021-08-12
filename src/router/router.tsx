import * as React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import App from '../App';

export default class Router extends React.Component{
      render(){
            return(
                  <HashRouter>
                        <Route exact path="/" component={ App }></Route>
                  </HashRouter>
            )
      }
}

