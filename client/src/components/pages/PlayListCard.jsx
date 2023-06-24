import React ,{useState}from 'react'
import {FaPlay} from 'react-icons/fa'
import "../layout/Navbar.css"
import { useSong } from '../context/Song'
function PlayListCard(props) {
    const [visible,setvisible]=useState('hidden')
    const [song , setSong] = useSong();
    const displayPlay=()=>{
        
          setvisible('visible');
      }
      const notPlay=()=>{
          setvisible('hidden');
        }
        const setSongPlayer=()=>{
          setSong(
            {
                id:props.id,
                name: props.name,
                image: props.image,
                artist: props.artist,
                genre: props.genre,
                year: props.year,
                song_path : props.song_path
            }
          )
        }
  return (
    <div className="music-card" onMouseOver={displayPlay}  onMouseOut={notPlay} onClick={setSongPlayer}>
                <img className="img"src={props.image} alt="" />
            <div className="name">
                {props.name} 
            </div>
            <div className="about">
                {props.artist}
            </div>
            <div className="play-button" style={{visibility:visible}}>
            <FaPlay id='play-icon'/>
            </div>
            </div> 
  )
}

export default PlayListCard