export interface PlayerProps {
    activeStreamingUrl: string | undefined;
    isPlaying: boolean;
    volume: number;
    seekTime: number;
    onEnded: () => void;
    onTimeUpdate: (event: { target: { currentTime: React.SetStateAction<number>; }; }) => void;
    onLoadedData: (event: { target: { duration: React.SetStateAction<number>; }; }) => void;
    repeat: boolean;
}