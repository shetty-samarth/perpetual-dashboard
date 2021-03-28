import Header from '../components/Header';
import PieGraph from '../components/PieGraph';
import PieGraphstwo from '../components/PieGraphstwo';
import CardsComp from '../components/CardsComp';
import CardsComp2 from '../components/CardsComp2';
import DropInfo1 from '../components/DropInfo1';
import DropInfo2 from '../components/DropInfo2';
import {CssBaseline, Grid, InputBase, makeStyles} from '@material-ui/core'
import React from 'react';
import SideMenu from '../components/SideMenu';

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
      backgroundColor:"#E5E5E5",
      width:"100%",
      position:"relative"
    },
    div:{
      position:"absolute",
      marginLeft:"400px",
      marginTop:"450px",
      width: '100%',
    },
    drop1:{
      position:"relative",
      marginTop:"10px",
      marginBottom:"10px"
    },
    drop2:{
      position:"relative",
      marginTop:"10px"
    },
    grid:{
        
    }
    
  })

function Page1() {
    const classes = useStyles();
  return (
    
      <div className={classes.body}>
      <Header className={classes.header}/>
      {/* <Grid container>
          <Grid item sm={3}>
              <InputBase />
          </Grid>

          <Grid item sm={3}>
              <InputBase />
          </Grid>

          <Grid item sm={3}>
              <InputBase />
          </Grid>
      </Grid> */}
      <CardsComp />
      <CardsComp2 />
      <div className={classes.div}>
      <DropInfo1 className={classes.drop1} />
    
      <DropInfo2 className={classes.drop2}/>
      </div>
      
      </div>
      
    
  );
}

export default Page1
