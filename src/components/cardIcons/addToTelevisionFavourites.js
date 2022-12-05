import React, { useContext } from "react";
import { TelevisionShowsContext } from "../../contexts/televisionShowsContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddToTelevisionFavouritesIcon = ({ televisionShow }) => {
  const context = useContext(TelevisionShowsContext);

  const handleAddToTelevisionFavourites = (e) => {
    e.preventDefault();
    context.addToTelevisionFavourites(televisionShow);
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToTelevisionFavourites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToTelevisionFavouritesIcon;