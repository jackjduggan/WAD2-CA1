import React from "react";

const ShowReview =  ({ ShowReview }) => {
  return (
    <>
      <p>Review By: {ShowReview.author} </p>
      <p>{ShowReview.content} </p>
    </>
  );
};
export default ShowReview