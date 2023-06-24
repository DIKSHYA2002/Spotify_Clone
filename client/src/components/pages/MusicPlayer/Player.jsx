import React, { useState, useRef, useEffect } from "react";
import Controls from "./Controls";
import Details from "./Details";
function Player(props) {
    const audioEl = useRef(null);
      const [isPlaying, setIsPlaying] = useState(false);

      useEffect(() => {
        if (isPlaying) {
          audioEl.current.play();
        } else {
          audioEl.current.pause();
        }
      });

      // const SkipSong = (forwards = true) => {
      //   if (forwards) {
      //     props.setCurrentpropsIndex(() => {
      //       let temp = props.currentpropsIndex;
      //       temp++;

      //       if (temp > props.Playlists.length - 1) {
      //         temp = 0;
      //       }

      //       return temp;
      //     });
      //   } else {
      //     props.setCurrentpropsIndex(() => {
      //       let temp = props.currentpropsIndex;
      //       temp--;

      //       if (temp < 0) {
      //         temp = props.Playlists.length - 1;
      //       }
      //       return temp;
      //     });
      //   }
      // };
    return (
        <div className="c-player">
            <Details 
             name =  {props.name}
             image= {props.image}
             artist= {props.artist}
             genre={props.genre}
             year =  {props.year}
             song_path = {props.song_path}
            />
            <Controls    isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          
           
            />
            <audio
               isPlaying={isPlaying}
                className="c-player--audio"
                src={props.song_path}
                ref={audioEl}
                controls
            ></audio>
            
        </div>
    );
    //   return (
    //     <div className="c-player">
    //       <h4>Playing now</h4>
    //       <Details props={props.Playlists[props.currentpropsIndex]} />
    //       <Controls
    //         isPlaying={isPlaying}
    //         setIsPlaying={setIsPlaying}
    //         Skipprops={Skipprops}
    //       />
    //       <audio
    //         className="c-player--audio"
    //         src={props.Playlists[props.currentpropsIndex].props_path}
    //         ref={audioEl}
    //         controls
    //       ></audio>
    //       <p>
    //         Next up:{" "}
    //         <span>
    //           {props.Playlists[props.nextpropsIndex].title} by{" "}
    //           {props.Playlists[props.nextpropsIndex].artist}
    //         </span>
    //       </p>
    //     </div>
    //   );
}

export default Player;
