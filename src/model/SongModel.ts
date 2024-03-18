import { StreamingResponse } from "./StreamingResponse";
import { Song } from "./searchModels";

export interface ActiveSong{
    song: Song | null;
    streaming: StreamingResponse | null;
    currentSongs: Song[];
}