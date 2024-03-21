import { SongDetailed } from "ytmusic-api";

export interface TrackProps {
    isPlaying: boolean;
    isActive: boolean;
    activeSong: SongDetailed;
}