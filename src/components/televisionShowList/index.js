import React from "react";
import TelevisionShow from "../televisionShowCard";
import Grid from "@mui/material/Grid";

const TelevisionShowList = ( {televisionShows, action }) => {
  let televisionShowCards = televisionShows.map((tS) => (
    <Grid key={tS.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <TelevisionShow key={tS.id} televisionShow={tS} action={action} />
    </Grid>
  ));
  return televisionShowCards;
};

export default TelevisionShowList;