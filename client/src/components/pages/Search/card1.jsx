import React, { useEffect } from "react";
import "./card.css";
import { AiOutlineDelete } from "react-icons/ai";
import axios from "axios";
function Card1({ id1, name, image, artist, playId, handleViewSongs }) {
  const handleDeleteClick = async () => {
    console.log(localStorage.getItem("id"));
    var url =
      "http://localhost:1000/playlist/song/" +
      localStorage.getItem("id") +
      "/" +
      playId +
      "/" +
      id1;
    console.log(url);
    const result = await axios.delete(url, {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    });
    handleViewSongs();
    alert(result.data.message);
  };
  return (
    <div className="card" style={{color:"white"}}>
      <div className="albumimg">
        <img src={image} className="album" style={{zIndex:"0"}}></img>
      </div>
      <div className="information">
        <div className="title">{name}</div>
        <div className="artist">{artist}</div>
      </div>
      <div className="albumname">{name}</div>
      <div className="time">4:00</div>
      <button onClick={handleDeleteClick} style={{width:"80px",height:"40px",fontSize:"20px"}}>
        <AiOutlineDelete />
      </button>
    </div>
  );
}
export default Card1;
