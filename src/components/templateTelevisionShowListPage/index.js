import React, { useState } from "react";
import Header from "../headerTelevisionShowList";
import FilterCard from "../filterTelevisionShowsCard";
import TelevisionShowList from "../televisionShowList";
import Grid from "@mui/material/Grid";


function TelevisionShowListPageTemplate({ televisionShows, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);

  let displayedTelevisionShows = televisionShows
    .filter((tS) => {
      return tS.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((tS) => {
      return genreId > 0 ? tS.genre_ids.includes(genreId) : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
          />
        </Grid>
        <TelevisionShowList action={action} televisionShows={displayedTelevisionShows}></TelevisionShowList>
      </Grid>
    </Grid>
  );
}
export default TelevisionShowListPageTemplate;