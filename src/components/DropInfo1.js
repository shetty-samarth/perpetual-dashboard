import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid, InputBase } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '70%',
    // position:"absolute",
    //marginLeft:"400px",
    marginTop:"10px"
  },
  heading: {
    width: "100%",
    
  },
  accordian:{
    width:'95%',
    backgroundColor:"#D5D5D5"
  },

  grid:{
      backgroundColor:"White",
      width:"95%"
  }
}));


function DropInfo1() {
    const classes = useStyles();
    const dataList = [{id:0, name:"PLGIT - Class" , value:"$87,999.05" },{id:1, name:"PLGIT/Reserve - Class" , value:"$47,472.43" },{id: 2, name:"PLGIT - Class" , value:"$20.59" }]
    return (
        <div className={classes.root}>
          <Accordion className={classes.accordian}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                  <Grid container>
                      <Grid item sm={3}>
                          <Typography align="left">State Fund </Typography>
                          
                      </Grid>

                      <Grid item sm={3}>
                      <Typography align="left">00001984028</Typography>
                          
                      </Grid>

                      <Grid item sm={6} >
                      <Typography align="right"> $135,471.48</Typography>
                         
                      </Grid>
                  </Grid>
              </Typography>
            </AccordionSummary>

            {dataList.map((items,index)=>{
                const{id,name,value} = items
                return(
                <AccordionDetails key={id} className={classes.grid}>
              <Typography className={classes.grid}>
                <Grid container >
                    <Grid item sm={6} >
                        <Typography align="left">{name}</Typography>
                    
                    </Grid>

                    <Grid item sm={6} >
                    <Typography align="right">{value}</Typography>
                    
                    </Grid>
                     
                </Grid>
                
              </Typography>
            </AccordionDetails>
            
                )
            })}

          </Accordion>
        </div>
      );
}

export default DropInfo1
