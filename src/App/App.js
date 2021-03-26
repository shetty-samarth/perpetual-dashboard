import React from 'react';
import SideMenu from '../components/SideMenu';
import logo from '../logo.svg';
import {makeStyles} from '@material-ui/core'
import './App.css';

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
      
  }
})

function App() {
  const classes = useStyles();
  return (
    <>
      <SideMenu className={classes.sideMenu}></SideMenu>
    </>
    
  );
}

export default App;
