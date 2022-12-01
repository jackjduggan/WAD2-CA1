import React, { useContext } from "react";
import { ShowsContext } from "../../contexts/showsContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddToShowsFavouritesIcon = ({ Show }) => {
  const context = useContext(ShowsContext);

  const handleAddToShowsFavourites = (e) => {
    e.preventDefault();
    context.addToShowsFavourites(Show);
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToShowsFavourites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToShowsFavouritesIcon;