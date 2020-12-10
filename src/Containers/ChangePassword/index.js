import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  InputLabel,
  FormControlLabel,
  Checkbox,
  Link,
  Button,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  leftSide: {
    backgroundColor: "#64A15E",
    height: "100vh",
    padding: "12% 4%",
  },
  rightSide: {
    height: "100vh",
    padding: "8% 4%",
  },
  leftHeading: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "40px",
    lineHeight: "60px",
    textAlign: "right",
    color: "#FFFFFF",
    display: "block",
  },
  leftText: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "25px",
    lineHeight: "37px",
    textAlign: "right",
    color: "rgba(255, 255, 255, 0.83)",
    display: "block",
    margin: "15% 0",
  },
  heading: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "35px",
    lineHeight: "52px",
    color: "#000000",
    display: "block",
  },
  inputBox: {
    margin: "20px 0",
  },
  input: {
    height: 51,
  },
  label: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "20px",
    color: "#000000",
    padding: "10px 0",
  },
  btn: {
    color: "#fff",
    width: "100%",
    padding: 10,
    textTransform: "none",
    fontSize: 20,
  },
  linkBox: {
    margin: "20px 0",
    textAlign: "center",
  },
  linkText: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "21px",
    color: "#000000",
  },
  link: {
    padding: "0 5px",
  },
  "@media (max-width: 1024px)": {
    leftSide: {
      height: "100%!important",
      padding: "12% 4%",
      textAlign: "center",
    },
    rightSide: {
      height: "100%",
      padding: "8% 4%",
    },
  },
}));

export default function SignIn() {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid item xs={12} xl={6} lg={6} className={classes.leftSide}>
          <div>
            <span className={classes.leftHeading}>
              Facile et simple d’utilisation pour VOTRE équipe
            </span>

            <span className={classes.leftText}>
              Collaborez avec toutes les équipes Nous sommes flexibles et nos
              fonctionnalités s'adaptent à vos besoins.
            </span>
          </div>
        </Grid>
        <Grid item xs={12} xl={6} lg={6} className={classes.rightSide}>
          <div>
            <span className={classes.heading}>Changer le mot de passe</span>
            <span>
              C’est presque finis...
              <br />
              Laissez-nous vous aider à rendre votre compte accéssible
            </span>
          </div>
          <div>
            <div className={classes.inputBox}>
              <InputLabel component="legend" className={classes.label}>
                Nouveau mot de passe
              </InputLabel>
              <TextField
                id="outlined-textarea"
                multiline
                variant="outlined"
                fullWidth
                className={classes.input}
              />
            </div>

            <div className={classes.inputBox}>
              <InputLabel component="legend" className={classes.label}>
                Confirmation du mot de passe
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

            <div>
              <br />
              <Button
                variant="contained"
                color="secondary"
                className={classes.btn}
                disableElevation
              >
                Changer le mot de passe
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
