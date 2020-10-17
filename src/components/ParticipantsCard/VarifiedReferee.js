import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import { red } from "@material-ui/core/colors";
import { Varified_Referee } from "./ParticipantData";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function VarifiedReferee() {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        {Varified_Referee.map((player) => (
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                {player.avatar}
              </Avatar>
            }
            title={player.title}
            subheader={player.subHeading}
          />
        ))}
      </Card>
    </div>
  );
}
