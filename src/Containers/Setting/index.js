import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Button,
  Avatar,
  InputLabel,
  InputBase,
  Badge,
} from "@material-ui/core";
import clsx from "clsx";
import { AddBox, Edit } from "@material-ui/icons";
import SettingProfile from "./../../Assets/settingProfile.png";
import Logo from "./../../Assets/logo.png";
import { Navbar } from "./../../Components";
const useStyles = makeStyles((theme) => ({
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
  contentContainer: {
    background: "#F3F5FA",
    borderRadius: "10px 0 0 0",
    padding: 20,
    height: "100%",
  },
  formContainer: {
    marginTop: 20,
  },
  title: {
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "21px",
    display: "flex",
    alignItems: "center",
    color: "#303441",
  },
  desc: {
    fontSize: "14px",
    lineHeight: "21px",
    display: "flex",
    alignItems: "center",
    color: "rgba(48, 52, 65, 0.73)",
    padding: "8px 0",
  },
  formRightSide: {
    backgroundColor: "#64A15E",
    borderRadius: "14px 0px 0px 14px",
    padding: "10% 0",
    height: "100%",
  },
  list: {
    listStyle: "none",
  },
  listItem: {
    fontSize: "20px",
    padding: "10px 20px",
    color: "rgba(255, 255, 255, 0.67)",
    fontWeight: 500,
    cursor: "pointer",
    marginBottom: 10,
  },
  listItemActive: {
    color: "#fff",
    fontWeight: 600,
    fontSize: "20px",
    backgroundColor: "rgba(191, 226, 188, 0.36)",
    padding: "10px 20px",
    marginBottom: 10,
    cursor: "pointer",
  },
  fromLeftSide: {
    backgroundColor: "#fff",
    padding: "2%",
    borderRadius: "0px 14px 14px 0px",
    height: "100%",
  },
  formTitle: {
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "21px",
    display: "flex",
    alignItems: "center",
    color: "#303441",
  },
  profileBox: {
    display: "flex",
    alignItems: "center",
    margin: "2% 0",
  },
  badgeIcon: {
    backgroundColor: "#E3E0E0",
    fontSize: "12px",
    color: "#64A15E",
    padding: "2px",
    borderRadius: "100px",
  },
  userName: {
    fontWeight: 600,
    fontSize: "16px",
    color: "#64A15E",
    display: "block",
  },

  designation: {
    fontWeight: 600,
    fontSize: "14px",
    color: "#8F8F8F",
    display: "block",
  },
  profile: {
    width: 51,
    height: 51,
    padding: 0,
    marginRight: "5px",
  },
  inputBox: {
    display: "flex",
    gap: 20,
    margin: "20px 0",
  },
  label: {
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "21px",
    display: "flex",
    alignItems: "center",
    color: "#8F8F8F",
    padding: "5px 0",
  },
  btnBox: {
    display: "flex",
    justifyContent: "flex-end",
    paddingTop: 30,
  },
}));

const styles = {
  input: {
    backgroundColor: "#F5F5F5",
    border: 0,
    fontSize: 18,
    outline: "none",
    padding: 17,
    borderRadius: 6,
    minWidth: 400,
  },
  btn: {
    boxShadow: "none",
    marginBottom: 5,
    textTransform: "none",
    backgroundColor: "#64A15E",
    borderRadius: "5px",
    padding: 12,
    width: 200,
    color: "#fff",
    "&:hover": {
      backgroundColor: "#7cad78",
    },
  },
};

export default function DetailBoard() {
  const [active, setActive] = useState({ tabOne: true, tabTwo: false });
  const classes = useStyles();

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
              <Button style={styles.btn} disableElevation>
                Inviter votre équipe
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item lg={10} xm={12}>
          <Navbar />

          <div className={classes.contentContainer}>
            <span className={classes.title}>Réglages</span>
            <span className={classes.desc}>
              Ajuster les informations associés à votre compte ici
            </span>

            <div className={classes.formContainer}>
              <Grid container>
                <Grid item lg={2} xm={12}>
                  <div className={classes.formRightSide}>
                    <ul className={classes.list}>
                      <li
                        className={clsx(
                          active.tabOne
                            ? classes.listItemActive
                            : classes.listItem
                        )}
                        onClick={() =>
                          setActive({ tabOne: true, tabTwo: false })
                        }
                      >
                        General
                      </li>
                      <li
                        className={clsx(
                          active.tabTwo
                            ? classes.listItemActive
                            : classes.listItem
                        )}
                        onClick={() =>
                          setActive({ tabOne: false, tabTwo: true })
                        }
                      >
                        Compte
                      </li>
                    </ul>
                  </div>
                </Grid>
                <Grid item lg={10} xm={12}>
                  {active.tabOne ? (
                    <div className={classes.fromLeftSide}>
                      <span className={classes.formTitle}>
                        Information générale
                      </span>

                      <div className={classes.profileBox}>
                        <div>
                          <Badge
                            anchorOrigin={{
                              vertical: "bottom",
                              horizontal: "right",
                            }}
                            badgeContent={
                              <Edit className={classes.badgeIcon} />
                            }
                            overlap="circle"
                          >
                            <Avatar
                              src={SettingProfile}
                              className={classes.profile}
                            />
                          </Badge>
                        </div>
                        <div>
                          <span className={classes.userName}>Andrian Diko</span>
                          <span className={classes.designation}>
                            Senior Developer
                          </span>
                        </div>
                      </div>

                      <div className={classes.form}>
                        <div className={classes.inputBox}>
                          <div style={{ flex: 1 }}>
                            <InputLabel
                              component="legend"
                              className={classes.label}
                            >
                              Prénom
                            </InputLabel>
                            <InputBase
                              id="outlined-textarea"
                              multiline
                              variant="outlined"
                              fullWidth
                              className={classes.input}
                              style={styles.input}
                              inputProps={{
                                backgroundColor: "red",
                              }}
                              security={true}
                            />
                          </div>
                          <div style={{ flex: 1 }}>
                            <InputLabel
                              component="legend"
                              className={classes.label}
                            >
                              Nom de famille
                            </InputLabel>
                            <InputBase
                              id="outlined-textarea"
                              multiline
                              variant="outlined"
                              fullWidth
                              className={classes.input}
                              security={true}
                              style={styles.input}
                            />
                          </div>
                        </div>

                        <div className={classes.inputBox}>
                          <div style={{ flex: 1 }}>
                            <InputLabel
                              component="legend"
                              className={classes.label}
                            >
                              Titre
                            </InputLabel>
                            <InputBase
                              id="outlined-textarea"
                              multiline
                              variant="outlined"
                              fullWidth
                              className={classes.input}
                              security={true}
                              style={styles.input}
                            />
                          </div>
                          <div style={{ flex: 1 }}>
                            <InputLabel
                              component="legend"
                              className={classes.label}
                            >
                              Numéro de téléphone
                            </InputLabel>
                            <InputBase
                              id="outlined-textarea"
                              multiline
                              variant="outlined"
                              fullWidth
                              className={classes.input}
                              security={true}
                              style={styles.input}
                            />
                          </div>
                        </div>

                        <div className={classes.inputBox}>
                          <div style={{ flex: 1 }}>
                            <InputLabel
                              component="legend"
                              className={classes.label}
                            >
                              À propos
                            </InputLabel>
                            <InputBase
                              multiline
                              id="outlined-textarea"
                              variant="outlined"
                              fullWidth
                              className={classes.input}
                              security={true}
                              style={styles.input}
                              rows="5"
                            />
                          </div>
                        </div>

                        <div className={classes.btnBox}>
                          <Button disableElevation style={styles.btn}>
                            Save
                          </Button>
                        </div>
                      </div>
                    </div>
                  ) : null}

                  {active.tabTwo ? (
                    <div className={classes.fromLeftSide}>
                      <span className={classes.formTitle}>
                        Paramètre du compte
                      </span>

                      <div className={classes.profileBox}>
                        <div>
                          <Badge
                            anchorOrigin={{
                              vertical: "bottom",
                              horizontal: "right",
                            }}
                            badgeContent={
                              <Edit className={classes.badgeIcon} />
                            }
                            overlap="circle"
                          >
                            <Avatar
                              src={SettingProfile}
                              className={classes.profile}
                            />
                          </Badge>
                        </div>
                        <div>
                          <span className={classes.userName}>
                            ariyant studio
                          </span>
                          <span className={classes.designation}>
                            ariyant.com
                          </span>
                        </div>
                      </div>

                      <div className={classes.inputBox}>
                        <div style={{ flex: 1 }}>
                          <InputLabel
                            component="legend"
                            className={classes.label}
                          >
                            Courriel
                          </InputLabel>
                          <InputBase
                            id="outlined-textarea"
                            multiline
                            value="andrian.diko@ariyant.com"
                            variant="outlined"
                            fullWidth
                          />
                        </div>
                      </div>
                      <div className={classes.form}>
                        <div className={classes.inputBox}>
                          <div style={{ flex: 1 }}>
                            <InputLabel
                              component="legend"
                              className={classes.label}
                            >
                              Changez votre mot de passe
                            </InputLabel>
                            <InputBase
                              id="outlined-textarea"
                              multiline
                              variant="outlined"
                              className={classes.input}
                              style={styles.input}
                              inputProps={{
                                backgroundColor: "red",
                              }}
                              security={true}
                            />
                          </div>
                        </div>

                        <div className={classes.inputBox}>
                          <div style={{ flex: 1 }}>
                            <InputLabel
                              component="legend"
                              className={classes.label}
                            >
                              Répété le mot de passe
                            </InputLabel>
                            <InputBase
                              id="outlined-textarea"
                              multiline
                              variant="outlined"
                              className={classes.input}
                              style={styles.input}
                              inputProps={{
                                backgroundColor: "red",
                              }}
                              security={true}
                            />
                          </div>
                        </div>
                        <div className={classes.btnBox}>
                          <Button disableElevation style={styles.btn}>
                            Sauvegarder
                          </Button>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </Grid>
              </Grid>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
