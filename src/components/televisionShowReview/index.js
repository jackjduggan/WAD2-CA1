import React from "react";

const TelevisionShowReview =  ({ televisionShowReview }) => {
  return (
    <>
      <p>Review By: {televisionShowReview.author} </p>
      <p>{televisionShowReview.content} </p>
    </>
  );
};
export default TelevisionShowReview