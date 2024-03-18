import { Song } from "./searchModels";

export interface TrackProps {
    isPlaying: boolean;
    isActive: boolean;
    activeSong: Song;
}