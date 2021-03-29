import React, { useState, } from 'react'
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

import {Link} from 'react-router-dom'

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
        textDecoration:'none',
        '&:hover':{
            width:"240px",
            backgroundColor:"#FFD051",
            borderRadius:"0px 8px 8px 0px",
            cursor: 'pointer',
            outline:'none'
        }
    },

    listChild:{
        textDecoration:'none',
        color:"black",
    },

    selectChild:{
        textDecoration:'none',
        color:"blue",
    }
})


function SideMenu() {
    const classes = useStyles();
    

    const itemList1 = [{text:"Balance Summary", icon:<Balance />,path:'/',select:false},
    {text:"Transactions",icon:<Transaction />,path:'/transaction', select:false}, 
    {text:"Check Details",icon:<Details />,path:'/details', select:false},
    {text:"Fixed Term Holdings",icon:<Holdings />,path:'/holdings', select:false}]

    const itemList2 = [{text:"Statements", icon:<Statement />,path:'/statements', select:false},
    {text:"Daily Confirms",icon:<DailyConf />,path:'/dailyconfirms', select:false},
    {text:"Documents",icon:<Documents />,path:'/documents'}]

    const itemList3 = [{text:"Account Information", icon:<Info />,path:'/AccountInfo', select:false},
    {text:"Tutorials",icon:<Tutorial />,path:'/Tutorials', select:false},
    {text:"Holiday Schedule",icon:<Holiday />,path:'/Holiday', select:false}]

    const [selected,setSelected] = useState(itemList1[0].text)
    
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
                    const {text, icon, path} = item
                    let isSelected =selected
                    
                    // console.log("Item object",item)
                    // console.log("Selected object",selected)
                    return(
                    <ListItem button key={text} className={classes.listItem}>
                        {icon && <ListItemIcon>{icon}</ListItemIcon>}
                        <Link to={item.path} className={classes.listChild} onClick={()=>{setSelected(text)}}>
                        
                        <ListItemText primary={text} className={isSelected===text? classes.selectChild:classes.listChild}/>
                        </Link>
                    </ListItem>
                    )
                })}
            </List>

            <h6 className={classes.subHeading}>STATEMENTS</h6>
            <List>
                {itemList2.map((item,index)=>{
                    const {text,icon,path} = item
                    let isSelected =selected
                    return(
                        <ListItem button key={text} className={classes.listItem}>
                            {icon && <ListItemIcon>{icon}</ListItemIcon>}
                            <Link to={item.path} className={classes.listChild} onClick={()=>{setSelected(text)}}>
                        
                        <ListItemText primary={text} className={isSelected===text? classes.selectChild:classes.listChild}/>
                        </Link>
                        </ListItem>
                    )
                })}
            </List>

            <h6 className={classes.subHeading}>RESOURCES</h6>
            <List>
                {itemList3.map((item,index)=>{
                    const {text,icon,path} = item
                    let isSelected =selected
                    return(
                        <ListItem button key={text} className={classes.listItem}>
                            {icon && <ListItemIcon>{icon}</ListItemIcon>}
                            <Link to={item.path} className={classes.listChild} onClick={()=>{setSelected(text)}}>
                        
                        <ListItemText primary={text} className={isSelected===text? classes.selectChild:classes.listChild}/>
                        </Link>
                        </ListItem>
                    )
                })}

              
            </List>
        </SideNav>
    )
}

export default SideMenu
