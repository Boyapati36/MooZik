import { Song } from "./searchModels";

export interface PlayerState {
    currentSongs: Song[];
    currentIndex: number;
    isActive: boolean;
    isPlaying: boolean;
    activeSong: Song;
    genreListId: string;
}