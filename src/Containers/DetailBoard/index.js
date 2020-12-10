import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Button,
  Avatar,
  Dialog,
  InputLabel,
  TextField,
} from "@material-ui/core";

import { Add, AddBox, AddCircle, MoreHoriz } from "@material-ui/icons";
import Profile from "./../../Assets/profile.png";
import Logo from "./../../Assets/logo.png";
import { Navbar,SideBox } from "./../../Components";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  modalContainer: {
    padding: "5% 10%",
  },
  dialogTitle: {
    fontWeight: 600,
    fontSize: "17px",
    lineHeight: "21px",
    display: "flex",
    alignItems: "center",
    letterSpacing: "-0.02em",
    color: "#000",
    padding: "20px 0",
  },
  textBox: {
    background: "rgba(100, 161, 94, 0.7)",
    borderRadius: "9px",
    padding: "5%",
  },

  insText: {
    fontWeight: "normal",
    fontSize: "15px",
    lineHeight: "21px",
    display: "flex",
    alignItems: "center",
    letterSpacing: "-0.02em",
    color: "#FFFFFF",
  },

  inputBox: {
    padding: "10px 0",
  },
  label: {
    fontWeight: 600,
    fontSize: "12px",
    lineHeight: "21px",
    display: "flex",
    alignItems: "center",
    color: "rgba(0, 0, 0, 0.58)",
    padding: "15px 0",
  },
  helperText: {
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "21px",
    display: "flex",
    alignItems: "center",
    color: "rgba(0, 0, 0, 0.18)",
  },
  dialogBtnBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: "8% 0",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  sideBar: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100vh",
  },
  logoBox: {
    textAlign: "center",
    padding: "10% 0",
  },
  sideNavItem: {
    background: "#F3F5FA",
    borderRadius: 10,
    margin: 12,
    display: "flex",
    alignItems: "center",
    padding: 20,
  },
  navText: {
    fontSize: 14,
    letterSpacing: "-0.02em",
    color: "#494E5F",
    flex: 1,
    maxWidth: 180,
  },
  AddIcon: {
    color: "rgba(100, 161, 94, 0.49)",
    boxShadow: "0px 4px 4px rgba(100, 161, 94, 0.15)",
    minHeight: 37,
    minWidth: 37,
  },

  sideBarFooter: {
    textAlign: "center",
    padding: "10%",
  },
  sideFooterText: {
    color: "rgba(50, 49, 77, 0.88)",
    fontSize: 14,
    padding: "5%",
    display: "block",
  },
  subTitile: {
    margin: 12,
    fontSize: 12,
    color: "rgba(0, 0, 0, 0.41)",
  },

  navProfile: {
    width: 24,
    height: 24,
    padding: 0,
    margin: "0 1px",
  },
  contentTable: {
    background: "#F3F5FA",
    borderRadius: "10px 0 0 0",
    padding: 20,
  },
  members: {
    display: "flex",
    padding: 4,
  },
  tableContainer: {
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    height: "79vh",
  },
  tableTitle: {
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "21px",
    display: "flex",
    alignItems: "center",
    letterSpacing: "-0.02em",
    color: "#303441",
    padding: "0 8px",
  },
  table: {
    maxWidth: 340,
    minWidth: 200,
  },
  tableHeader: {
    background: "#64A15E",
    borderRadius: "14px 14px 0px 0px",
    padding: "15px",
    display: "flex",
    alignItems: "center",
  },
  title: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "15px",
    lineHeight: "21px",
    letterSpacing: "-0.02em",
    color: "#FFFFFF",
    flex: 1,
  },
  moreIcon: {
    color: "#FFF",
    padding: "0 5px",
  },
  taskBox: {
    background: "#FFFFFF",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    padding: "10px 20px",
    marginBottom: "5px",
  },
  description: {
    fontWeight: 500,
    fontSize: 12,
    lineHeight: "18px",
    alignItems: "center",
    // letterSpacing: "-0.02em",
    color: "rgba(0, 0, 0, 0.65)",
  },
  dateBox: {
    display: "flex",
    justifyContent: "flex-end",
    fontSize: 12,
  },
  date: {
    letterSpacing: "-0.02em",
    color: "rgba(0, 0, 0, 0.29",
  },
  buttonBox: {
    padding: "20px",
  },
}));

const style = {
  envoyerBtn: {
    boxShadow: "none",
    marginBottom: 5,
    textTransform: "none",
    backgroundColor: "#FB8C72",
    borderRadius: "5px",
    padding: 12,
    width: 200,
    color: "#fff",
    "&:hover": {
      backgroundColor: "#D6D6D6",
    },
  },
  addMoreBtn: {
    boxShadow: "none",
    marginBottom: 5,
    textTransform: "none",
    backgroundColor: "#D6D6D6",
    borderRadius: "14px",
    padding: 8,
    "&:hover": {
      backgroundColor: "#D6D6D6",
    },
  },
};

export default function DetailBoard() {
  const classes = useStyles();
  const [addUserDialog, setAddUserDialog] = React.useState(false);

  const handleOpenUserDialog = () => {
    setAddUserDialog(true);
  };

  const handleCloseUserDialog = () => {
    setAddUserDialog(false);
  };

  const openSideBox=()=>{
    alert("working")
  }

  return (
    <div>
      <Grid container>
        <Grid item lg={2} xm={12}>
          <div className={classes.sideBar}>
            <div style={{ flex: 1 }}>
              <div className={classes.logoBox}>
                <img src={Logo} alt="" />
              </div>

              <div className={classes.sideNavItem}>
                <span className={classes.navText}>Créer un tableau</span>
                <AddBox className={classes.AddIcon} />
              </div>

              <span className={classes.subTitile}>Tableaux</span>

              <div className={classes.sideNavItem}>
                <span className={classes.navText}>Tableau Exemple</span>
              </div>

              <div className={classes.sideNavItem}>
                <span className={classes.navText}>
                  Tableau 1 qui prend de la place
                </span>
              </div>

              <div className={classes.sideNavItem}>
                <span className={classes.navText}>Tableau 2 simple</span>
              </div>
            </div>

            <div className={classes.sideBarFooter}>
              <span className={classes.sideFooterText}>
                Collaborez sur vos tableaux c’est gratuit !
              </span>
              <Button style={style.envoyerBtn} disableElevation>
                Inviter votre équipe
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item lg={10} xm={12}>
          <Navbar />
      {/* <SideBox func={openSideBox}/> */}


          <div className={classes.contentTable}>
            <div className={classes.members}>
              <span className={classes.tableTitle}>Tableau Exemple</span>
              <Avatar
                alt="Remy Sharp"
                src={Profile}
                className={classes.navProfile}
              />
              <Avatar
                alt="Remy Sharp"
                src={Profile}
                className={classes.navProfile}
              />
              <Avatar
                className={classes.navProfile}
                color="primary"
                onClick={handleOpenUserDialog}
              >
                <Add style={{ backgroundColor: "#FB8C72" }} />
              </Avatar>

              {/* Add User Dialog */}

              <Dialog
                open={addUserDialog}
                onClose={handleCloseUserDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                className={classes.modal}
              >
                <div className={classes.modalContainer}>
                  <div className={classes.dialogTitle}>
                    Invitez vos collaborateurs sur le tableau
                  </div>

                  <div className={classes.textBox}>
                    <span className={classes.insText}>
                      Vos coéquipiers recevrons un courriel qui leur permettra
                      de joindre votre tableau et d’y collaborer sans
                      restrictions.
                    </span>
                  </div>

                  <div className={classes.inputBox}>
                    <InputLabel component="legend" className={classes.label}>
                      Adresse courriel
                    </InputLabel>
                    <TextField
                      id="outlined-textarea"
                      multiline
                      variant="outlined"
                      fullWidth
                      className={classes.input}
                      security={true}
                    />
                  </div>
                  <span className={classes.helperText}>
                    *Séparez les adresses avec une virgule
                  </span>

                  <div className={classes.inputBox}>
                    <InputLabel component="legend" className={classes.label}>
                      Ou partagez ce lien d’invitation
                    </InputLabel>
                    <TextField
                      id="outlined-textarea"
                      multiline
                      variant="outlined"
                      fullWidth
                      className={classes.input}
                      security={true}
                    />
                  </div>

                  <div className={classes.dialogBtnBox}>
                    <Button style={style.envoyerBtn} disableElevation>
                      Envoyer
                    </Button>
                  </div>
                </div>
              </Dialog>
            </div>

            <div className={classes.tableContainer}>
              <div className={classes.table}>
                <div className={classes.tableHeader}>
                  <span className={classes.title}>À faire</span>
                  <MoreHoriz className={classes.moreIcon} />
                </div>
                <div className={classes.taskBox}>
                  <span className={classes.description}>
                    Create an account that will be installed in the application
                  </span>
                  <div className={classes.dateBox}>
                    <span className={classes.date}>24 Aug</span>
                  </div>
                </div>

                <div className={classes.taskBox}>
                  <span className={classes.description}>
                    Create an account that will be installed in the application
                  </span>
                  <div className={classes.dateBox}>
                    <span className={classes.date}>24 Aug</span>
                  </div>
                </div>
                <div className={classes.taskBox}>
                  <span className={classes.description}>
                    Create an account that will be installed
                  </span>
                  <div className={classes.dateBox}>
                    <span className={classes.date}>24 Aug</span>
                  </div>
                </div>

                <div
                  className={classes.buttonBox}
                  style={{ padding: "10px 0" }}
                >
                  <Button style={style.addMoreBtn} fullWidth disableElevation>
                    <Add />
                  </Button>
                </div>
              </div>

              <div className={classes.table}>
                <div className={classes.tableHeader}>
                  <span className={classes.title}>En progrès</span>
                  <MoreHoriz className={classes.moreIcon} />
                </div>
                <div className={classes.taskBox}>
                  <span className={classes.description}>
                    Create an account that will be installed in the application
                  </span>
                  <div className={classes.dateBox}>
                    <span className={classes.date}>24 Aug</span>
                  </div>
                </div>
                <div className={classes.taskBox}>
                  <span className={classes.description}>
                    Create an account that will be installed in the application
                    Create an account that will be installed in the application
                    Create an account that will be
                  </span>
                  <div className={classes.dateBox}>
                    <span className={classes.date}>24 Aug</span>
                  </div>
                </div>
                <div className={classes.taskBox}>
                  <span className={classes.description}>
                    Create an account that will be installed
                  </span>
                  <div className={classes.dateBox}>
                    <span className={classes.date}>24 Aug</span>
                  </div>
                </div>
                <div
                  className={classes.buttonBox}
                  style={{ padding: "10px 0" }}
                >
                  <Button style={style.addMoreBtn} fullWidth disableElevation>
                    <Add />
                  </Button>
                </div>
              </div>

              <div className={classes.table}>
                <div className={classes.tableHeader}>
                  <span className={classes.title}>En progrès</span>
                  <MoreHoriz className={classes.moreIcon} />
                </div>
                <div className={classes.taskBox}>
                  <span className={classes.description}>
                    Create an account that will be installed
                  </span>
                  <div className={classes.dateBox}>
                    <span className={classes.date}>24 Aug</span>
                  </div>
                </div>

                <div className={classes.taskBox}>
                  <span className={classes.description}>
                    Create an account that will be installed
                  </span>
                  <div className={classes.dateBox}>
                    <span className={classes.date}>24 Aug</span>
                  </div>
                </div>
                <div className={classes.taskBox}>
                  <span className={classes.description}>
                    Create an account that will be installed in the application
                  </span>
                  <div className={classes.dateBox}>
                    <span className={classes.date}>24 Aug</span>
                  </div>
                </div>

                <div
                  className={classes.buttonBox}
                  style={{ padding: "10px 0" }}
                >
                  <Button style={style.addMoreBtn} fullWidth disableElevation>
                    <Add />
                  </Button>
                </div>
              </div>

              <div className={classes.table}>
                <div className={classes.tableHeader}>
                  <AddCircle className={classes.moreIcon} />
                  <span className={classes.title}>Nouvelle liste</span>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
