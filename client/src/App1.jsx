import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Playlist1 from "./components/playlist/Playlist1";
import { NavLink } from "react-router-dom";
import Layout from "./components/layout/Layout";

const App1 = () => {
  const [playlistName, setPlaylistName] = useState("");
  const [lists, setLists] = useState([]);
  const [isCreatingPlaylist, setIsCreatingPlaylist] = useState(false);

  const handleCreatePlaylist = () => {
    setIsCreatingPlaylist(true);
  };

  const handleCancelPlaylist = () => {
    setIsCreatingPlaylist(false);
    setPlaylistName("");
  };

  const handleSubmitPlaylist = async () => {
    if (playlistName) {
      const playlist = {
        name: playlistName,
      };
      var url = "http://localhost:1000/playlist/" + localStorage.getItem("id");
      console.log(url);
      const result = await axios.put(url, playlist, {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      });
      getPlayLists();
    }
  };
  const getPlayLists = async () => {
    var url = "http://localhost:1000/playlist/" + localStorage.getItem("id");
    const result = await axios.get(url, {
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    });
    setLists(result.data.playlist);
  };
  useEffect(() => {
    getPlayLists();
  }, []);
  // console.log(lists);
  return (

    <Layout>
    <div className="app">
      <NavLink to="/search">
        <button className="createPlaylist1"> Add Songs</button>
      </NavLink>
      <button onClick={handleCreatePlaylist} className="createPlaylist">
        Create Playlist
      </button>
      <br />
      <br />
      <br />
      <br />  
      {isCreatingPlaylist && (
        <div className="playlist-form">
          <form className="form" onSubmit={handleSubmitPlaylist}>
            <h3>Create Playlist</h3>
            <label className="name">
              Name
              <br />
              <input
                type="text"
                onChange={(e) => setPlaylistName(e.target.value)}
              ></input>
            </label>
            <div className="form-buttons">
              <button type="submit">Create</button>
              <button type="button" onClick={handleCancelPlaylist}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
      {lists.map((item, key) => {
        return (
          <Playlist1
            name={item.name}
            id={item._id}
            songs={item.songs}
            getPlayLists={getPlayLists}
          />
        );
      })}
    </div>
    </Layout>
  );
};

export default App1;
