import { useState, useEffect } from "react";
import Player from "./Player";
import { useSong } from "../../context/Song";
import { usePlayLists } from "../../context/PlayLists";
function Music_Player() {
  const [song , setSong] = useSong();
  const [PlayLists , setPlayLists]=usePlayLists();
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);
  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > PlayLists.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
    
  }, [ currentSongIndex, PlayLists.length]);
 
  return (
    <>
      <Player 
      name =  {song.name}
      image= {song.image}
      artist= {song.artist}
      genre={song.genre}
      year =  {song.year}
      song_path = {song.song_path}
      PlayLists={PlayLists}
      />
       </>

  );
}

export default Music_Player;
{/* <Player
currentSongIndex={currentSongIndex}
setCurrentSongIndex={setCurrentSongIndex}
nextSongIndex={nextSongIndex}
PlayLists={PlayLists}
/> */}