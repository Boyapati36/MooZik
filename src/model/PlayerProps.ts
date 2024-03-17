export interface PlayerProps {
    activeSong: {
        hub: {
        actions: {
            uri: string;
        }[];
        };
    };
    isPlaying: boolean;
    volume: number;
    seekTime: number;
    onEnded: () => void;
    onTimeUpdate: () => void;
    onLoadedData: () => void;
    repeat: boolean;
}