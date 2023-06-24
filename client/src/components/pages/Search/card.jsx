import React, { useEffect } from "react";
import "./card.css";
import {AiOutlineHeart,AiOutlinePlusCircle} from 'react-icons/ai'
import { useState } from "react";
import { useSong } from "../../context/Song";
import axios from "axios";
function Card(props ) {
    const [dis,setdis] = useState("none")
    const [disp, setDisp] = useState("disp13");
  const [list1, setList1] = useState([]);
    const [song , setSong] = useSong();
    function mouseon(){
        setdis("block")
    }
    function mouseout(){
        setdis("none")
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
    
      async function getPlay() {
        const URL = "http://localhost:1000/playlist/" + localStorage.getItem("id");
        const message = await axios.get(URL, {
          headers: {
            "x-auth-token":
              localStorage.getItem("token"),
          },
        });
        setList1(message.data.playlist);
      }
      async function handleAddPlaylist(_id, name) {
        console.log(props);
        console.log("Hello");
        const URL =
          "http://localhost:1000/playlist/song/" +
          localStorage.getItem("id")+"/" +
          _id;
        const songObj = {
          id: props.id,
          name: props.name,
          image: props.image,
          artist: props.artist,
          genre: props.genre,
          year: props.year,
          song_path: props.song_path,
        };
        console.log("Hey this is", songObj);
        const message = await axios.put(URL, songObj, {
          headers: {
            "x-auth-token":
              localStorage.getItem("token"),
          },
        });
        alert(message.data.message);
      }
      useEffect(() => {
        getPlay();
      }, []);
    
    return (
        <div className="card" onMouseOver={mouseon} onMouseOut={mouseout} onClick={setSongPlayer}>
            <div className="albumimg">
                <img src={props.image} className="album"></img>
            </div>
                <div className="information">
                    <div className="title">{props.name}</div>
                    <div className="artist">{props.artist}</div>
                </div>
            <div className="albumname">
                    {props.name}
            </div>
            <div className="time">
                    4:00
            </div>
            <div id="likeadd">
        <AiOutlinePlusCircle
          id="heart"
          style={{ display: dis }}
          onClick={function () {
            if (disp == "disp13") {
              setDisp("disp12");
            } else {
              setDisp("disp13");
            }
          }}
        />
        
      </div>
      <div className={disp}>
        {list1.map((item) => {
          return (
            <>
              <div
                className="listplay"
                onClick={() => handleAddPlaylist(item._id, item.name)}
              >
                {item.name}
              </div>
            </>
          );
        })}
      </div>
        </div>
    );
}
export default Card;
