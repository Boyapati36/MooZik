export interface ControlsProps {
    isPlaying: boolean;
    repeat: boolean;
    setRepeat: React.Dispatch<React.SetStateAction<boolean>>;
    shuffle: boolean;
    setShuffle: React.Dispatch<React.SetStateAction<boolean>>;
    currentSongs: any[];
    handlePlayPause: () => void;
    handlePrevSong: () => void;
    handleNextSong: () => void;
}