import React, { useState, useEffect } from "react";
import "./Playlist.css";
import axios from "axios";
import { AiOutlineDelete } from "react-icons/ai";
import Card1 from "../pages/Search/card1";
import { NavLink } from "react-router-dom";
const Playlist1 = ({ name, id, getPlayLists }) => {
  const [songs1, setSongs1] = useState([]);
  const handleDeleteClick = async () => {
    console.log(localStorage.getItem("id"));
    var url =
      "http://localhost:1000/playlist/" + localStorage.getItem("id") + "/" + id;
    console.log(url);
    const result = await axios.delete(url, {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    });
    getPlayLists();
    alert(result.data.message);
  };

  const handleViewSongs = async () => {
    console.log(localStorage.getItem("id"));
    var url =
      "http://localhost:1000/playlist/" + localStorage.getItem("id") + "/" + id;
    console.log(url);
    const result = await axios.get(url, {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    });
    setSongs1(result.data.playlist.songs);
  };
  useEffect(() => {
    handleViewSongs();
  }, []);
  return (
    <>
      <div className="playlist">
        <h3 style={{color:"white"}}>{name}</h3>
        <div className="playlist-header">
          <button onClick={handleDeleteClick} style={{width:"80px",height:"40px",fontSize:"20px"}}>
            <AiOutlineDelete />
          </button>
        </div>
        
      </div>
      {songs1.map((el, key) => {
          return (
            <div className="card-data">
              <Card1
                id1={el._id}
                name={el.name}
                image={el.image}
                artist={el.artist}
                genre={el.genre}
                year={el.year}
                song_path={el.song_path}
                playId={id}
                handleViewSongs={handleViewSongs}
              />
            </div>
          );
        })}
    </>
  );
};

export default Playlist1;
