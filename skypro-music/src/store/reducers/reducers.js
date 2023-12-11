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
  isSuffled: false,
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
        (track) => track.id === state.currentTrack.content.id
      );
      let content = state.tracks[currentTrackIndex + 1];
      const suffled = state.isSuffled;

      if (!content) {
        return state;
      }

      if (suffled) {
        let allIds = [];
        for (let i = 0; i < state.tracks.length; i++) {
          allIds.push(state.tracks[i].id);
        }

        const newAllIds = allIds.sort(() => Math.random() - 0.5);
        const randomTrackId = newAllIds[0];
        content = state.tracks[randomTrackId];
      }

      return {
        ...state,
        currentTrack: { content },
      };
    }

    case PREV_TRACK: {
      const currentTrackIndex = state.tracks.findIndex(
        (track) => track.id === state.currentTrack.content.id
      );
      let content = state.tracks[currentTrackIndex - 1];
      const suffled = state.isSuffled;

      if (!content) {
        return state;
      }

      if (suffled) {
        let allIds = [];
        for (let i = 0; i < state.tracks.length; i++) {
          allIds.push(state.tracks[i].id);
        }

        const newAllIds = allIds.sort(() => Math.random() - 0.5);
        const randomTrackId = newAllIds[0];
        content = state.tracks[randomTrackId];
      }

      return {
        ...state,
        currentTrack: { content },
      };
    }

    case TOGGLE_SUFFLED: {
      return {
        ...state,
        isSuffled: !state.isSuffled,
        shuffledPlaylist: [...state.tracks].sort(() => 0.5 - Math.random()),
      };
    }

    default:
      return state;
  }
}
