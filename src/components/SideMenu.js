import React from 'react'
import {Drawer as SideNav,
ListItem,
List,
ListItemIcon,
ListItemText,makeStyles, InputBase} from '@material-ui/core'
import Balance from '@material-ui/icons/PieChartTwoTone';
import Transaction from '@material-ui/icons/ReceiptTwoTone';
import Details from '@material-ui/icons/MonetizationOnTwoTone';
import Holdings from '@material-ui/icons/AccountBalanceWalletTwoTone';
import Statement from '@material-ui/icons/DescriptionTwoTone';
import DailyConf from '@material-ui/icons/DateRangeTwoTone';
import Documents from '@material-ui/icons/AssignmentTwoTone';
import Info from '@material-ui/icons/InfoTwoTone';
import Tutorial from '@material-ui/icons/PlayCircleOutlineTwoTone';
import Holiday from '@material-ui/icons/BeachAccessTwoTone';

const useStyles = makeStyles({
    sideNav:{
        display:'absolute',
        flexDirection:'column',
        width:"70%"
    },
    searchBox:{
        width:"250px",
        height: "px",
        backgroundColor:"#F1F2F2",
        borderRadius:"12px",
        outline:"none",
        margin:"10px 5px 10px 5px",
        border:'1px solid #F1F2F2',
        fontFamily:"Roboto",
        fontSize:"20px",
        textAlign:"center"
    },

    subHeading: {
        width: "62px",
        height: "16px",
        fontWeight:"700",
        fontFamily:"Roboto",
        fontSize:"10px",
        letterSpacing:"12%",
        color:"#818181",
        margin: "10px 20px 10px 20px",
        position:"relative",
    },

    listItem:{
        position:"relative",
        left:"0",
        width:"240px",
        outline:'none',
        '&:hover':{
            width:"240px",
            backgroundColor:"#FFD051",
            borderRadius:"0px 8px 8px 0px",
            cursor: 'pointer',
            outline:'none'
            
        }
    }
})

export default function SideMenu() {
    const classes = useStyles();

    const itemList1 = [{text:"Balance Summary", icon:<Balance />},
    {text:"Transactions",icon:<Transaction />}, 
    {text:"Check Details",icon:<Details />},
    {text:"Fixed Term Holdings",icon:<Holdings />}]

    const itemList2 = [{text:"Statements", icon:<Statement />},
    {text:"Daily Confirms",icon:<DailyConf />},
    {text:"Documents",icon:<Documents />}]

    const itemList3 = [{text:"Account Information", icon:<Info />},
    {text:"Tutorials",icon:<Tutorial />},
    {text:"Holiday Schedule",icon:<Holiday />}]



    return (
        <SideNav variant = "permanent" className={classes.sideNav}>
            <List>
                <ListItem container>
                <input type = "text" className={classes.searchBox}/>
                </ListItem>
            </List>
            {/* <InputBase className={classes.searchBox} placeholder=" SEARCH"/> */}
            <h6 className={classes.subHeading} >ACCOUNTS</h6>
            <List>
                {itemList1.map((item,index)=>{
                    const {text, icon} = item
                    return(
                    <ListItem button key={text} className={classes.listItem}>
                        {icon && <ListItemIcon>{icon}</ListItemIcon>}
                        <ListItemText primary={text} />
                    </ListItem>
                    )
                })}
            </List>

            <h6 className={classes.subHeading}>STATEMENTS</h6>
            <List>
                {itemList2.map((item,index)=>{
                    const {text,icon} = item
                    return(
                        <ListItem button key={text} className={classes.listItem}>
                            {icon && <ListItemIcon>{icon}</ListItemIcon>}
                            <ListItemText primary={text} />
                        </ListItem>
                    )
                })}
            </List>

            <h6 className={classes.subHeading}>RESOURCES</h6>
            <List>
                {itemList3.map((item,index)=>{
                    const {text,icon} = item
                    return(
                        <ListItem button key={text} className={classes.listItem}>
                            {icon&&<ListItemIcon>{icon}</ListItemIcon>}
                            <ListItemText primary = {text} />
                        </ListItem>
                    )
                })}

              
            </List>
        </SideNav>
    )
}

// export default SideMenu
