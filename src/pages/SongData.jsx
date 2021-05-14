import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../assets/styles/SongsData.css";

const SongData = () => {
  const song = useSelector((state) => state.selectedSong);
 
  
  return (
    <>
      {song ? (
        <div className="page" id="page">
          <h1>
            {song.name || (
              <Link to="/">
                no has seleccionado una cancion click aqui para volver al home
              </Link>
            )}
          </h1>
          <div className="song-data">
            <div className="song-data__wrapper">
              <img
                className="song-data-wrapper__img"
                src={song.albumImages[0].url || "null"}
                alt={song.name || "null"}
                height={song.albumImages[0].height || "null"}
                width={song.albumImages[0].width || "null"}
              />
            </div>
            <div className="song-data__info">
              <p className="song-data__tittle">artista (s) : 
              <span className="song-data__">
                {song.artists.map(e =>{ return(e.name) }) || "no hay cancion seleccionada"}
              </span>
              </p>
              <p className="song-data__tittle">album: {song.album || "--"}</p>
              <p className="song-data__tittle">fecha de salida del album: {song.albumRelease || "--"}</p>
              <p className="song-data__tittle">popularidad del album {song.popularity || ""}</p>
            </div>
          </div>
          <div>
              <Link to="/" className="button volver">volver</Link>
          </div>
        </div>
      ) : (
        <div className="page">
          <h2>NO HAY CANCION CARGADA AUN</h2>
          <Link className="carga" to="/">
            no has seleccionado una cancion click aqui para volver al home
          </Link>
        </div>
      )}
    </>
  );
};

export default SongData;
