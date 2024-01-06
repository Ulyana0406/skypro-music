import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentTrack: {},
  allIds: [],
  isPlayingTrack: null,
  tracks: [],
  isSuffled: false,
};

export const trackSlice = createSlice({
  name: "tracks",
  initialState,
  reducers: {
    setCurrentTrack(state, action) {
      const { id, content, isPlayingTrack, allTracks } = action.payload;

      return {
        id: id,
        ...state,
        currentTrack: { content },
        isPlayingTrack: isPlayingTrack,
        tracks: allTracks,
      };
    },
    nextTrack(state) {
      const playlist = state.isSuffled ? state.shuffledPlaylist : state.tracks;
      const currentTrackIndex = playlist.findIndex(
        (track) => track.id === state.currentTrack.content.id
      );
      let content = playlist[currentTrackIndex + 1];

      if (!content) {
        return state;
      }

      return {
        ...state,
        currentTrack: { content },
      };
    },
    prevTrack(state) {
      const playlist = state.isSuffled ? state.shuffledPlaylist : state.tracks;
      const currentTrackIndex = playlist.findIndex(
        (track) => track.id === state.currentTrack.content.id
      );
      let content = playlist[currentTrackIndex - 1];

      if (!content) {
        return state;
      }

      return {
        ...state,
        currentTrack: { content },
      };
    },
    toggleSuffled(state) {
      return {
        ...state,
        isSuffled: !state.isSuffled,
        shuffledPlaylist: [...state.tracks].sort(() => 0.5 - Math.random()),
      };
    },
    allTracksLoading(state, action) {
      const { allTracks } = action.payload;
      return {
        ...state,
        tracks: allTracks,
      };
    },
  },
});

export const { setCurrentTrack,nextTrack,prevTrack,toggleSuffled,allTracksLoading } = trackSlice.actions;
export default trackSlice.reducer;
