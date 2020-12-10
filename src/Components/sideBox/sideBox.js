import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import AppBar from "@material-ui/core/AppBar";

const useStyles = makeStyles({
    list: {
        width: 250
    },
    fullList: {
        width: "auto"
    }
});

export default function SideBox(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false
    });
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };


    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === "top" || anchor === "bottom"
            })}
            role="presentation"
        // onClick={toggleDrawer(anchor, false)}
        // onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem button style={{ fontFamily: "'Montserrat', sans-serif" }} onClick={()=>props.path.push("/")}>
                    <div className="_drawerPageLInk">Home</div>
                </ListItem>
                <ListItem button style={{ fontFamily: "'Montserrat', sans-serif" }} onClick={()=>props.path.push("courses")}>
                    <div className="_drawerPageLInk">Courses</div>
                </ListItem>

                <ListItem button style={{ fontFamily: "'Montserrat', sans-serif" }} >
                    <div className="_drawerPageLInk">Admin</div>
                </ListItem>
            </List>
        </div>
    );

    return (
            <div style={{ backgroundColor: "white", padding: 10,border:"2px solid black" }}>
                {["right"].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <Button onClick={toggleDrawer(anchor, true)}  ><MenuIcon /></Button>
                        <span className="_siteTitle">Mentoring</span>
                        <Drawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                        >
                            {list(anchor)}
                        </Drawer>
                    </React.Fragment>
                ))}
            </div>
    );
}