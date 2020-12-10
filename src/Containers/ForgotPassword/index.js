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
    padding: "12% 4%",
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

export default function ForgotPass() {
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
              Connectez-vous avec vos données que vous avez saisies pendant
              votre inscription
            </span>
          </div>
        </Grid>
        <Grid item xs={12} xl={6} lg={6} className={classes.rightSide}>
          <div>
            <span className={classes.heading}>Mot de passe oublié</span>
            <span>
              Laissez-nous vous aider à rendre votre compte <br />
              accéssible
            </span>
          </div>
          <div>
            <div className={classes.inputBox}>
              <InputLabel component="legend" className={classes.label}>
                Email
              </InputLabel>
              <TextField
                id="outlined-textarea"
                multiline
                variant="outlined"
                fullWidth
                className={classes.input}
              />
            </div>

            <div>
              <Button
                variant="contained"
                color="secondary"
                className={classes.btn}
                disableElevation
              >
                S'identifier
              </Button>
            </div>

            <div className={classes.linkBox}>
              <span className={classes.linkText}>
                Vous avez un compte ?
                <Link href="/" className={classes.link}>
                  Connectez vous
                </Link>
                maintenant.
              </span>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
