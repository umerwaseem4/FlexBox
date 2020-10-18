import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import RegisteredPlayer from "./RegisteredPlayer";
import Grid from "@material-ui/core/Grid";
import VarifiedReferee from "./VarifiedReferee";
import Volunteer from "./Valunteer";
import { Container } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },

  media: {
    height: 140,
  },
  title: {
    backgroundColor: "#eee",
    padding: "10px",
    borderRadius: "10px",
  },
});

// Content Data ===============
const data = [
  { title: "Varified Referee", component: <VarifiedReferee /> },
  { title: "Volunteer", component: <Volunteer /> },
  { title: "Participants", component: <RegisteredPlayer /> },
];

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <Container>
          <Grid container spacing={3}>
            {data.map((card) => (
              <Grid item xs={12} sm={4}>
                <div>
                  <CardActionArea>
                    <CardContent>
                      <Typography
                        className={classes.title}
                        gutterBottom
                        variant="h5"
                        component="h2"
                      >
                        {card.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {card.component}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
}
