import Header from '../Header';
import PieGraph from '../PieGraph';
import PieGraphstwo from '../PieGraphstwo';
import CardsComp from '../CardsComp';
import CardsComp2 from '../CardsComp2';
import DropInfo1 from '../DropInfo1';
import DropInfo2 from '../DropInfo2';
import {CssBaseline, Grid, InputBase, makeStyles, Typography} from '@material-ui/core'
import React from 'react';
import SideMenu from '../SideMenu';

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
      marginLeft:"0px",
      marginTop:"450px",
      width: 'auto',
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
    grid1:{
        height:"300px",
        position:"absolute",
        marginTop:"150px",
        
    },
    header:{
        position:"absolute",
    },
    grid2:{
        position:"relative",
    },

    grid3:{
        position:"relative",
        
    }
    
  })

function Page1() {
    const classes = useStyles();
  return (
    
      <div className={classes.body}>

      <Header className={classes.header}/>

      
      <Grid container className={classes.grid1}>
          
          <Grid item sm={3}>
              <InputBase />
          </Grid>

          <Grid item sm={4}>
               <CardsComp />
          
          </Grid>


          <Grid item sm={4}>
              <CardsComp2 />    
          </Grid>

          <Grid item sm={1}>
              <InputBase />
          </Grid>
         
      </Grid> 


      <div className={classes.div}>
      <Grid container className={classes.grid2}>
      <     Grid item sm={4}>
              <InputBase />
            </Grid>


          <Grid item sm={7}>
          <DropInfo1 className={classes.drop1} />
          </Grid>

          <Grid item sm={1}>
              <InputBase />
          </Grid>
      </Grid>

      <Grid container className={classes.grid3}>
      <     Grid item sm={4}>
              <InputBase />
            </Grid>


          <Grid item sm={7}>
          <DropInfo2 className={classes.drop1} />
          </Grid>

          <Grid item sm={1}>
              <InputBase />
          </Grid>
      </Grid>

      </div>

      
      
      </div>
      
    
  );
}

export default Page1
