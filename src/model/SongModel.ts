import { SongDetailed } from "ytmusic-api";
import { StreamingResponse } from "./StreamingResponse";

export interface ActiveSong{
    song: SongDetailed | null;
    currentSongs: SongDetailed[];
}