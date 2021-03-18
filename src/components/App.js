import React from 'react';
import {Route} from 'react-router-dom';
import Nav from './Nav.js';
import TitlePage from './TitlePage.js';
import ActualJobs from './ActualJobs.js';
import SailesManager from './SailesManager.js';
import FinanceAnalytic from './FinanceAnalytic.js';
import FinanceManager from './FinanceManager.js';
import Marketolog from './Marketolog.js';
import FinanceEconomist from './FinanceEconomist.js';
import Universities from './Universities.js'
import '../index.css';

function App() {
  return (
    <div className="root">
      <Nav></Nav>
      <Route exact path ='/'>
      <TitlePage></TitlePage>
      </Route>
      <Route path='/actual-jobs'>
        
        <ActualJobs></ActualJobs>
      </Route>
      <Route path='/sales-manager'>
        <SailesManager></SailesManager>
      </Route>
      <Route path='/finance-analytic'>
      <FinanceAnalytic></FinanceAnalytic>
      </Route>
      <Route path='/finance-manager'>
        <FinanceManager></FinanceManager>
      </Route>
      <Route path='/marketolog'>
        <Marketolog></Marketolog>
      </Route>
      <Route path='/economist-finansist'>
        <FinanceEconomist></FinanceEconomist>
      </Route>
      <Route path='/universities'>
        <Universities></Universities>
      </Route>


    
    </div>
  );
}

export default App;
