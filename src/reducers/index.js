
const reducer = (state, action) => {
    switch (action.type) {
      case "SONG_REQ":
        return {
          ...state,
          song: action.payload,
        };
      case "SET-SONG-REQUEST":
          return{
              ...state,
            selectedSong: action.payload,  
          }  
        default:
            return state;  
    };

}
export default reducer;