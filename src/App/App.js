import React from 'react';
import SideMenu from '../components/SideMenu';
import logo from '../logo.svg';
import {CssBaseline, makeStyles} from '@material-ui/core'
import './App.css';
import Header from '../components/Header';

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
  
})

function App() {
  const classes = useStyles();
  return (
    <>
       <SideMenu></SideMenu>
      <Header className={classes.header}/>
      <CssBaseline />
    </>
    
  );
}

export default App;
