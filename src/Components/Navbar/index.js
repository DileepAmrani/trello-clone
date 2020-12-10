import React from "react";
import { Close, Help, Notifications, Settings } from "@material-ui/icons";
import { Avatar, Badge, Link, Grid, InputBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

import clsx from "clsx";

import Profile from "./../../Assets/profile.png";
const useStyles = makeStyles((theme) => ({
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "20px 2%",
    backgroundColor: "#fff",
  },
  navItems: {
    padding: "0 10px",
  },
  icon: {
    width: 20,
    height: 20,
    color: "#A6A6A6",
  },

  navProfile: {
    width: 24,
    height: 24,
    padding: 0,
    margin: "0 1px",
  },
  sideBox: {
    minWidth: 500,
    padding: "30px",
    width: "auto",
  },
  fullList: {
    width: "auto",
  },
  closeBtnBox: {
    padding: "8% 0",
  },
  title: {
    fontWeight: 600,
    fontSize: "18px",
    alignItems: "center",
    color: "rgba(0, 0, 0, 0.83)",
    display: "block",
  },
  grid: {
    margin: "15px 0",
  },
  smPrifile: {
    margin: "2px",
    width: 34,
    height: 34,
  },
  lgProfile:{
    width: 44,
    height: 44,
  },
  input: {
    backgroundColor: "#F5F5F5",
    border: 0,
    fontSize: 18,
    outline: "none",
    padding: 17,
    borderRadius: 6,
    minWidth: 400,
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: true,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const SideBoxContent = (anchor) => (
    <div
      className={clsx(classes.sideBox, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
    >
      <div className={classes.closeBtnBox}>
        <Close />
      </div>

      <span className={classes.title}>
        Create an account that will be installed in the
        <br /> application
      </span>

      <div style={{ marginTop: "20px" }}>
        <Grid container alignItems="center" className={classes.grid}>
          <Grid item lg={3} xm={12}>
            <span>Attribuer</span>
          </Grid>
          <Grid item lg={9} xm={12}>
            <div style={{ display: "flex" }}>
              <Avatar className={classes.smPrifile}>H</Avatar>
              <Avatar className={classes.smPrifile}>H</Avatar>
              <Avatar className={classes.smPrifile}>H</Avatar>
            </div>
          </Grid>
        </Grid>

        <Grid container alignItems="center" className={classes.grid}>
          <Grid item lg={3} xm={12}>
            <span>Date d’échance</span>
          </Grid>
          <Grid item lg={9} xm={12}>

          </Grid>
        </Grid>

        <Grid container alignItems="center" className={classes.grid}>
          <Grid item lg={3} xm={12}>
            <span>Description</span>
          </Grid>
          <Grid item lg={9} xm={12}>
            <InputBase
              id="outlined-textarea"
              multiline
              variant="outlined"
              fullWidth
              className={classes.input}
              rows='10'
            />
          </Grid>
        </Grid>
        <Grid container alignItems="center" className={classes.grid}>
          <Grid item lg={3} xm={12}>
            <Avatar className={classes.lgProfile}>H</Avatar>
          </Grid>
          <Grid item lg={9} xm={12}>
            {/* <div className={classes.}> */}

            {/* </div> */}
          </Grid>
        </Grid>
      </div>
    </div>
  );

  return (
    <div>
      <div className={classes.navbar}>
        <div className={classes.navItems}>
          <Link href="/home">
            <Notifications className={classes.icon} />
          </Link>
        </div>

        <div className={classes.navItems}>
          <Link href="/home">
            <Help className={classes.icon} />
          </Link>
        </div>

        <div className={classes.navItems}>
          <Link href="/setting">
            <Settings className={classes.icon} />
          </Link>
        </div>

        <div className={classes.navItems}>
          {["right"].map((anchor) => (
            <React.Fragment key={anchor}>
              <Badge
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                badgeContent=" "
                variant="dot"
                color="primary"
                overlap="circle"
              >
                <Avatar
                  alt="Remy Sharp"
                  src={Profile}
                  className={classes.navProfile}
                  onClick={toggleDrawer(anchor, true)}
                />
              </Badge>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {SideBoxContent(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
