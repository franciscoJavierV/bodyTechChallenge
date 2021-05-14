import axios from "axios";

export const songReq = (payload) => ({
    type: "SONG_REQ",
    payload,
});
export const setSongReq = (payload) => ({
    type: "SET-SONG-REQUEST",
    payload,
})
export const setError = (payload) => ({
    type: "SET_ERROR",
    payload,
});
export const selectSong = (payload) => {
    return (dispatch) => {
        dispatch(setSongReq(payload))
    }
}
export const spotifyRequest = (payload) => {
    return (dispatch) => {
        //fetch to backend register service
        axios
            .get(`http://localhost:3000/${payload}`)
            .then(({
                data
            }) => {
                dispatch(songReq(data))
            })
            .catch((err) => dispatch(setError(err)));
    };
};

export {
    spotifyRequest as
    default
}