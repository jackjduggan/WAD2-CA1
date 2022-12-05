import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { TelevisionShowsContext } from "../../contexts/televisionShowsContext";

const RemoveFromTelevisionFavouritesIcon = ({ televisionShow }) => {
  const context = useContext(TelevisionShowsContext);

  const handleRemoveFromTelevisionFavourites = (e) => {
    e.preventDefault();
    context.removeFromTelevisionFavourites(televisionShow);
  };
  return (
    <IconButton
      aria-label="remove from favorites"
      onClick={handleRemoveFromTelevisionFavourites}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromTelevisionFavouritesIcon;