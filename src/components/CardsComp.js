import React from 'react'
import {Card, CardContent, Divider, FormHelperText, Grid, makeStyles, Typography} from '@material-ui/core'
const useStyles = makeStyles({
    card1:{
        width:"400px",
        position:"relative",
        marginLeft:"50px",
        // marginTop:"150px",
        borderRadius:"12px",
        height:"50vh"
    },
    amount:{
        fontSize:"48px",
        // justifyItems:"center",
        display:"flex",
        flexDirection:"row",
        marginLeft:"20px",
        marginTop:"0px",
        marginBottom:"20px",
        fontWeight:"500"
    },
    gridSpacing:{
        marginTop:"10px",
        marginBottom:"10px",
        color:"#828282"
    }
})

function CardsComp() {
    const classes = useStyles()
    return (
        <div>
            <Card variant="outlined" className={classes.card1}>
                <CardContent>
                    <Typography className={classes.amount}>
                    $136,731.28
                    </Typography>
                    <Grid container className={classes.gridSpacing}>
                        <Grid item sm={6}>
                        <Typography align="left">
                        current balance
                        </Typography>
                        </Grid>
                        <Grid item sm={6}>
                        <Typography align = "right">
                        $13673128
                        </Typography>
                        </Grid>                       
                    </Grid>

                    <Divider />

                    <Grid container className={classes.gridSpacing}>
                        <Grid item sm={6}>
                        <Typography align="left">
                        Balance Change 30d
                        </Typography>
                        </Grid>
                        <Grid item sm={6}>
                        <Typography align = "right">
                        $13673128
                        </Typography>
                        </Grid>                       
                    </Grid>

                    <Divider />

                    <Grid container className={classes.gridSpacing}>
                        <Grid item sm={6}>
                        <Typography align="left">
                        Balance Change 180d
                        </Typography>
                        </Grid>
                        <Grid item sm={6}>
                        <Typography align = "right">
                        $13673128
                        </Typography>
                        </Grid>                       
                    </Grid>

                </CardContent>
            </Card>
        </div>
    )
}

export default CardsComp
