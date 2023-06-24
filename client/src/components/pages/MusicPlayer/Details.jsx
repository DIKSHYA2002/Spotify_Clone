import React from "react";
function Details(props) {
    return (
      <div className="c-player--details">
        <div className="details-img">
          <img src={props.image} alt="" />
        </div>
        <div className="tittle"><div className="title">{props.name}</div>
        <div className="details-artist">{props.artist}</div></div>
        
      </div>
    );
  }

export default Details;
