import React from 'react';
import Page1 from '../components/Pages/Page1';
import SideMenu from '../components/SideMenu';
import logo from '../logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import Transactions from '../components/Pages/Transactions'
import CheckDetails from '../components/Pages/CheckDetails'
import FixedHolding from '../components/Pages/FixedHolding'
import Statement from '../components/Pages/Statement'
import DailyConfirms from '../components/Pages/DailyConfirms'
import Documents from '../components/Pages/Docs'
import AccountInfo from '../components/Pages/AccountInfo'
import Tutorials from '../components/Pages/Tutorials'
import Holiday from '../components/Pages/Holiday'





function App() {
 
  return (
    
      <div>
      
        <Router>
        <SideMenu />
        <Switch>
          <Route path='/' exact component={Page1} />
          <Route path='/transaction' component={Transactions}/>
          <Route path='/details' component={CheckDetails}/>
          <Route path='/holdings' component={FixedHolding}/>

          <Route path='/statements' component={Statement} />
          <Route path='/dailyconfirms' component={DailyConfirms} />
          <Route path='/documents' component={Documents} />

          <Route path='/AccountInfo' component={AccountInfo} />
          <Route path='/Tutorials' component={Tutorials} />
          <Route path='/Holiday' component={Holiday} />

        </Switch>
        </Router>
      </div>
      
    
  );
}

export default App;
