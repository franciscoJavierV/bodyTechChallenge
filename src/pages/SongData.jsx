import React from 'react'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const SongData =()=> {
    const song = useSelector((state) => state.selectedSong);
        return (
            <div className="page" id="page">
                <h1>
                {song.name || <Link to="/">no has seleccionado una cancion click aqui para volver al home</Link> }
                </h1>
            </div>
        )
}



export default SongData
