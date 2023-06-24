import React, { useState } from 'react';

const Song = ({ song, addToPlaylist, playlists }) => {
  const [showPlaylists, setShowPlaylists] = useState(false);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);

  const handleAddToPlaylist = () => {
    setShowPlaylists(!showPlaylists);
  };

  const handlePlaylistSelection = (playlist) => {
    setSelectedPlaylist(playlist);
    setShowPlaylists(false);
  };

  const renderPlaylists = () => {
    if (!showPlaylists) return null;

    return (
      <div className="playlists">
        {playlists.map((playlist) => (
          <div key={playlist.id} onClick={() => handlePlaylistSelection(playlist)}>
            {playlist.name}
          </div>
        ))}
      </div>
    );
  };

  const isSongInPlaylist = () => {
    if (!selectedPlaylist) return false;
    return selectedPlaylist.songs.some((s) => s.id === song.id);
  };

  return (
    <div className="song">
      <img src={song.image} alt={song.name} />
      <div>{song.name}</div>
      <div>{song.artist}</div>
      <div>{song.genre}</div>
      <div>{song.year}</div>
      {/* <div>{song.duration}</div> */}
      {!isSongInPlaylist() && (
        <div className="add-to-playlist" onClick={handleAddToPlaylist}>
          +
        </div>
      )}
      {renderPlaylists()}
    </div>
  );
};

export default Song;
