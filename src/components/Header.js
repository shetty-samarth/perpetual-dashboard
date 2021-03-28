import React from 'react'
import {AppBar, Avatar, Divider, Grid, InputBase, Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
    appbar:{
        height:"303px",
        marginRight:"300px",
        position:"absolute",
        zIndex: "-1"
    },

    name:{
        marginLeft:"70px",
        marginTop:"25px"
    },

    btn:{
        marginTop:"25px",
        padding:"0px",
        marginLeft:"100px",
        backgroundColor:"#FFD051",
        padding:"5px 9px 5px 9px",
        borderRadius:"12px",
        border:"none",
        alignItems:"center",
        cursor:'pointer',
        outline:'none'
    },

    avatar:{
        marginTop:"15px", 
        marginLeft:"50px",
    },

   userName:{
    marginTop:"15px",
   },

})
function Header() {
    const classes = useStyles()
    return (
        <AppBar position="static" className={classes.appbar}>
            <Toolbar>
                <Grid container>
                    <Grid item sm={3} >
                        <InputBase />
                    </Grid>
                    <Grid item sm={5} >
                        <h2 className={classes.name}>Example Company</h2>
                    </Grid>
                    <Grid item sm={2} >
                            <button className={classes.btn}>Whats New?</button>
                    </Grid>
                    <Grid item sm={1} >
                    {/* style={{marginTop:"15px"}} */}
                            <Avatar className={classes.avatar} src="https://images.unsplash.com/photo-1616597082843-de7ce757d548?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80"></Avatar>
                    </Grid>
                    <Grid item sm={1} className={classes.userName}>
                            <div>Allie Gator</div>
                            <div>Consultant</div>
                    </Grid>
                </Grid>
                <Divider />
            </Toolbar>
            <Divider />
            <Toolbar >
                <Grid container>
                <Grid item sm={3} >
                        <InputBase />
                    </Grid>

                    <Grid item sm={5} >
                    <h4 className={classes.name}>Balance Summary</h4>
                    </Grid>

                    <Grid item sm={4} >
                        <InputBase />
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header
