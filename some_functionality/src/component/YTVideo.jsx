import React from "react";
import PropTypes from "prop-types";

const YTVideo = ({ embedId }) => (
  <div className="my-4 text-center">
    <h4> Video Tutorial </h4>
    <div className="video-responsive">
      <iframe
        width="800"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  </div>
);

YTVideo.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YTVideo;
