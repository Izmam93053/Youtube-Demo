import React from 'react';
import "./channelCard.css";

function ChannelCard({channel}) {
  return (
    <div className="channelCard nav-item item mx channal">
    <div>
      <div className="d-flex">
        <img
          src={channel.channelImage}
          className="image "
          alt="image"
        />{" "}
        <span className="show display-flex">{channel.channelTitle}</span>
      </div>
    </div>
  </div>
  )
}

export default ChannelCard;
