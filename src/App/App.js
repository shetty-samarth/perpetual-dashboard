import React from 'react';
import SideMenu from '../components/SideMenu';
import logo from '../logo.svg';
import {CssBaseline, makeStyles} from '@material-ui/core'
import './App.css';
import Header from '../components/Header';
import PieGraph from '../components/PieGraph';
import PieGraphstwo from '../components/PieGraphstwo';
import CardsComp from '../components/CardsComp';
import CardsComp2 from '../components/CardsComp2';


const useStyles = makeStyles({
  sideMenu: {
      margin: '0px',
      display: 'flex',
      flexDirection: 'row',
      left:'0px',
      position:'absolute',
      height: '100%',
      width: '280px',
      backgroundColor:'#fff9e0',
  },
  body:{
    backgroundColor:"#E5E5E5"
  }
  
})

function App() {
  const classes = useStyles();
  return (
    

    <React.Fragment >
      <div className={classes.b}>
      <SideMenu></SideMenu>
      <Header className={classes.header}/>
      <CardsComp />
      <CardsComp2 />
      </div>
      
    </React.Fragment>
    
  );
}

export default App;
