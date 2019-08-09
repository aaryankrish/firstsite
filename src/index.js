import React from 'react';
import ReactDOM from 'react-dom';
import Courselist from './Courselist';
import Menu from './Menu';
import Home from './Home';
import Footer from './Footer';
import Contact from './Contact';
import NotFound from './NotFound';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
    <div>
    <Menu />

    <Switch>
    <Route path="/" exact component ={Home} />
    <Route path="/Course" exact component ={Courselist} />
    <Route path="/Contact" exact component ={Contact} />
    <Route path="*" component={NotFound}/>
    <Route  component={NotFound}/>
    </Switch>
    <Footer />
   
    </div>
    </BrowserRouter>
    , document.getElementById('root'));

serviceWorker.unregister();
