import React, { useState } from "react";
import { spotifyRequest, selectSong } from "../actions/index";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
    const [song, setSong] = useState("");
    const dispatch = useDispatch();
    //getting songs at first load 
  const songs = useSelector((state) => state.song);
  //calling the action at ../action/index
  const handdleSubmit = (e) => {
    e.preventDefault();
    dispatch(spotifyRequest(song));
  };
  return (
    <>
      <div className="page" id="page">
        <h1 className="tittle">BodyTech</h1>
        <form onSubmit={handdleSubmit} className="form">
          <input
            type="text"
            className="input"
            onChange={(e) => setSong(e.target.value)}
            value={song}
            placeholder="Buscar cancion"
          />
          <button type="submit" className="button" value="buscar">
            Buscar
          </button>
        </form>
        <div className="container">
            {/*condicional render of songs*/}
          {songs ? (
            songs.data.map((song) => {
              return (
                <div className="container-wrapper" key={song.id}>
                  <div className="container-wrapper__name">{song.name}</div>
                  <div className="container-wrapper__options">
                    <Link
                      to={`/song`}
                      onClick={() => dispatch(selectSong(song))}
                    >
                      ver mas
                    </Link>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="container">
              <p>
                Realiza una busqueda y aca se mostrara la informacion retornada
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
