import { useState, useEffect } from "react";
import { useContext, createContext } from "react";
const songContext = createContext();


const SongProvider = ({children})=>{
    const [song , setSong] = useState({
        id: 2,
        name: "Butter",
        image: "https://pbs.twimg.com/media/E-5eZ1eWYAAwLIA?format=jpg&name=4096x4096",
        artist: "BTS",
        genre: "kpop",
        year: "2021",
        song_path: "/assets/songs-kpop/BTS_Butter.mp3"
    });
    return (
        <songContext.Provider value={[song,setSong]}>
            {children}
        </songContext.Provider>
    );
    
}
const useSong =()=>useContext(songContext)
export {useSong,SongProvider}
