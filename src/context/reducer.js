export const actionType = {
    SET_USER: "SET_USER",
    SET_All_USERS: "SET_All_USERS",
    SET_All_ARTISTS: "SET_All_ARTISTS",
    SET_All_ALBUMS: "SET_All_ALBUMS",
    SET_All_SONGS: "SET_All_SONGS",
    //filter Type
    SET_FILTER_TERM: "SET_FILTER_TERM",
    SET_ARTIST_FILTER: "SET_ARTIST_FILTER",
    SET_LANGUAGE_FILTER: "SET_LANGUAGE_FILTER",
    SET_ALBUM_FILTER: "SET_ALBUM_FILTER",
    SET_ALERT_TYPE: "SET_ALERT_TYPE",

    SET_ISSONG_PLAYING: "SET_ISSONG_PLAYING",
    SET_SONG_INDEX: "SET_SONG_INDEX",
};

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case actionType.SET_USER:
            return {
                ...state,
                user: action.user,
            };

        case actionType.SET_All_USERS:
            return {
                ...state,
                allUsers: action.allUsers,
            };

        case actionType.SET_All_ARTISTS:
            return {
                ...state,
                allArtists: action.allArtists,
            };

        case actionType.SET_All_ALBUMS:
            return {
                ...state,
                allAlbums: action.allAlbums,
            };

        case actionType.SET_All_SONGS:
            return {
                ...state,
                allSongs: action.allSongs,
            };
        //filter case
        case actionType.SET_FILTER_TERM:
            return {
                ...state,
                filterTerm: action.filterTerm,
            };

        case actionType.SET_ARTIST_FILTER:
            return {
                ...state,
                artistFilter: action.artistFilter,
            };

        case actionType.SET_LANGUAGE_FILTER:
            return {
                ...state,
                languageFilter: action.languageFilter,
            };

        case actionType.SET_ALBUM_FILTER:
            return {
                ...state,
                albumFilter: action.albumFilter,
            };

        case actionType.SET_ALERT_TYPE:
            return {
                ...state,
                alertType: action.alertType,
            };

        case actionType.SET_ISSONG_PLAYING:
            return {
                ...state,
                isSongPlaying: action.isSongPlaying,
            };
        case actionType.SET_SONG_INDEX:
            return {
                ...state,
                songIndex: action.songIndex,
            };
        case actionType.SET_MINI_PLAYER:
            return {
                ...state,
                miniPlayer: action.miniPlayer,
            };


        default: return state;
    }

};
export default reducer;