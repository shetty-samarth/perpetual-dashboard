import React from 'react'
import {Drawer as SideNav,
ListItem,
List,
ListItemIcon,
ListItemText,makeStyles} from '@material-ui/core'
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
        overflow:"hidden",
        display:'flex',
        flexDirection:'column'
    },
    searchBox:{
        width:"248px",
        height: "59px",
        backgroundColor:"#F1F2F2",
        borderRadius:"12px",
        outline:"none",
        margin:"10px 5px 10px 5px",
        border:'1px solid #F1F2F2'
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
            
            <h6 className={classes.subHeading} >ACCOUNTS</h6>
            <List>
                {itemList1.map((item,index)=>{
                    const {text, icon} = item
                    return(
                    <ListItem button key={text}>
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
                        <ListItem button key={text}>
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
                        <ListItem button key={text}>
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
