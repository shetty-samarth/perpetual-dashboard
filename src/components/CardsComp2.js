import { Card, CardContent, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import PieGraphstwo from './PieGraphstwo'

const useStyles = makeStyles({
    card1:{
        width:"400px",
        position:"absolute",
        marginLeft:"850px",
        marginTop:"150px",
        borderRadius:"12px"
    },
    ul:{
        marginTop:"80px"
    },
    liGen:{
        paddingTop:"5px",
        color:"#3E6BB3"
    },
    liState:{
        paddingTop:"5px",
        color:"#FFD051"
    }
    
})

function CardsComp2() {
    const classes = useStyles();
    return (
        <div>
            <Card variant="outlined" className={classes.card1}>
                <CardContent>
                    <Grid container>
                        <Grid item sm={6}>
                            <PieGraphstwo />
                        </Grid>

                        <Grid item sm={6} >
                            <ul className={classes.ul}>
                                <li className={classes.liGen}>General Fund</li>
                                <li className={classes.liState}>State Fund</li>
                            </ul>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    )
}

export default CardsComp2
