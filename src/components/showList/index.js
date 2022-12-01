import React from "react";
import Show from "../showCard";
import Grid from "@mui/material/Grid";

const ShowList = ( {Shows, action }) => {
  let ShowCards = Shows.map((t) => (
    <Grid key={t.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Show key={t.id} Show={t} action={action} />
    </Grid>
  ));
  return ShowCards;
};

export default ShowList;