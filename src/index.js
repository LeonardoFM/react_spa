import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import RegisterProd from './pages/register/RegisterProd';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Category from './pages/register/Category';

const Page404 = () =>{ return (<div> <h1>Page 404</h1></div>)}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route  path="/" exact component={App}/>
      <Route path="/cadastro/prod" component={RegisterProd}/>
      <Route path="/cadastro/categorias" component={Category}/>
      <Route component={Page404}/>
    </Switch>
    
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
