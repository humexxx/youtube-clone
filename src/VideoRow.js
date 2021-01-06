import React from "react";
import "./VideoRow.css";

function VideoRow({
  image,
  title,
  description,
  channel,
  timestamp,
  views,
  subs,
}) {
  return (
    <div className="videoRow">
      <img src={image} alt="" />
      <div className="videoRow__text">
        <h3>{title}</h3>
        <p className="videoRow__headline">
          {channel} &#8226;{" "}
          <span className="videoRow__subs">
            <span className="videoRow__subsNumber">{subs}</span> Subscribers
          </span>{" "}
          {views} views &#8226; {timestamp}
        </p>
        <p className="videoRow__description">{description}</p>
      </div>
    </div>
  );
}

export default VideoRow;
