import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
  },
  paper: {
    padding: theme.spacing(3),
    color: theme.palette.text.secondary,
    height: "160px",
    width: "330px",
    backgroundColor: "rgb(246, 246, 246)",
    border: "none",
  },
  titleHeading: {
    padding: "20px 10px",
    fontWeight: "500",
    color: "#000",
  },
  subHeading: {
    color: "#888",
  },
  mainHeading: {
    fontSize: "20px",
    fontWeight: "300",
    color: "#000",
  },
  btn: {
    padding: "10px 20px",
    border: "none",
    backgroundColor: "#05AC98",
    margin: "10px 0",
    borderRadius: "50px",
    color: "#fff",
    cursor: "pointer",
    fontSize: "15px",
  },
  content: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "20px 20px",
    boxShahdow: "1px 1px 1px rgba(0,0,0,0.5)",
  },
}));

export default function FullWidthGrid({ cardsData }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={5} className={classes.content}>
        <h1 className={classes.titleHeading}>Register</h1>
        <Grid container spacing={3}>
          {/* CardData comming from Props */}
          {cardsData.map((item) => (
            <Grid className={classes.cards} key={item.id} item xs={12} sm={4}>
              <Paper className={classes.paper}>
                <h3 className={classes.mainHeading}>{item.title}</h3>
                <h5 className={classes.subHeading}>{item.desc}</h5>
                <button className={classes.btn}>{item.btn}</button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </div>
  );
}
