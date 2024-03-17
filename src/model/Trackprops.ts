export interface TrackProps {
    isPlaying: boolean;
    isActive: boolean;
    activeSong: {
        images: {
            coverart: string;
        };
        title: string;
        subtitle: string;
    };
}