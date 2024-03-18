import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Song } from '../model/searchModels';
import { ActiveSong } from '../model/SongModel';
import { StreamingResponse } from '../model/StreamingResponse';

interface PlayerState {
    currentSongs: Song[];
    currentIndex: number;
    isActive: boolean;
    isPlaying: boolean;
    activeSong: Song | null;
    activeStreamingUrl: string | undefined;
    genreListId: string;
}

const initialState: PlayerState = {
    currentSongs: [],
    currentIndex: 0,
    isActive: false,
    isPlaying: false,
    activeSong: null,
    activeStreamingUrl:'',
    genreListId: '',
};

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setActiveSong: (state, action: PayloadAction<ActiveSong>) => {
            state.activeSong = action.payload.song;
            state.activeStreamingUrl = action.payload.streaming?.results;

            if (action.payload.currentSongs) {
                state.currentSongs = action.payload.currentSongs;
            }

            state.currentIndex = action.payload.currentSongs.findIndex(song => song === action.payload.song);
            state.isActive = true;
        },
        
        setActiveStreamingUrl: (state, action: PayloadAction<StreamingResponse>) => {
            state.activeStreamingUrl = action.payload.results;
        },

        nextSong: (state, action: PayloadAction<number>) => {
            const index = action.payload;

            state.activeSong = state.currentSongs[index];

            state.currentIndex = index;
            state.isActive = true;
        },

        prevSong: (state, action: PayloadAction<number>) => {
            const index = action.payload;

            state.activeSong = state.currentSongs[index];

            state.currentIndex = index;
            state.isActive = true;
        },

        playPause: (state, action: PayloadAction<boolean>) => {
            state.isPlaying = action.payload;
        },
    },
});

export const { setActiveSong, setActiveStreamingUrl, nextSong, prevSong, playPause } = playerSlice.actions;

export default playerSlice.reducer;