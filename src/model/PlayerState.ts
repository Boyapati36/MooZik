export interface PlayerState {
    currentSongs: Song[];
    currentIndex: number;
    isActive: boolean;
    isPlaying: boolean;
    activeSong: Song;
    genreListId: string;
}

export interface Song {
    // Define the structure of a song
}