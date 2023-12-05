import {
  SET_CURRENT_TRACK,
  NEXT_TRACK,
  PREV_TRACK,
  TOGGLE_SUFFLED,
} from "../actions/types/types";

// 1.
const initialState = {
  currentTrack: {},
  allIds: [],
  isPlayingTrack: null,
  tracks: [],
};

// 2.
export default function playerReducer(state = initialState, action) {
  switch (action.type) {
    // 3.
    case SET_CURRENT_TRACK: {
      // 4.

      const { id, content, isPlayingTrack, allTracks } = action.payload;

      // 5.
      return {
        id: id,
        ...state,
        currentTrack: { content },
        isPlayingTrack: isPlayingTrack,
        tracks: allTracks,
      };
    }

    case NEXT_TRACK: {
      const currentTrackIndex = state.tracks.findIndex(
        (track) => track.id === state.currentTrack.id
      );
      console.log(`state.tracks ${state.tracks}`);
      console.log(`state.currentTrack ${state.currentTrack}`);
      console.log(currentTrackIndex);
      const newTrack = state.tracks[currentTrackIndex + 1];
      console.log(newTrack);
      if (!newTrack) {
        return state;
      }
      return {
        ...state,
        currentTrack: newTrack,
      };
    }

    default:
      return state;
  }
}
