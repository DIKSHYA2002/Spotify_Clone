import React from "react";

const Lists = () => {
    
  const playlist = {
    name: "My Playlist",
    songs: [
      { id: 1, name: "Song 1", album: "Album 1", duration: "3:30" },
      { id: 2, name: "Song 2", album: "Album 2", duration: "4:15" },
      { id: 3, name: "Song 3", album: "Album 3", duration: "2:55" },
    ],
  };

  return (
    <div className="playlist">
      <h3>{playlist.name}</h3>
      <ul>
        {playlist.songs.map((song) => (
          <li key={song.id}>
            <span className="song-name">{song.name}</span>
            <span className="song-album">{song.album}</span>
            <span className="song-duration">{song.duration}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lists;
