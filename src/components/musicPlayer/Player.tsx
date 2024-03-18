import React, { useRef, useEffect, SyntheticEvent } from 'react';
import { PlayerProps } from '../../model/PlayerProps';

const Player: React.FC<PlayerProps> = ({activeStreamingUrl, isPlaying, volume, seekTime, onEnded, onTimeUpdate, onLoadedData, repeat }) => {

    const ref = useRef<HTMLAudioElement>(null);


    useEffect(() => {
        if (ref.current) {
            if (isPlaying) {
                ref.current.play();
            } else {
                ref.current.pause();
            }
        }
    }, [isPlaying]);

    useEffect(() => {
        if (ref.current) {
            ref.current.volume = volume;
        }
    }, [volume]);

    useEffect(() => {
        if (ref.current) {
            ref.current.currentTime = seekTime;
        }
    }, [seekTime]);

    const handleTimeUpdate = (event: SyntheticEvent<HTMLAudioElement, Event>) => {
        const target = event.target as HTMLAudioElement;
        onTimeUpdate({ target: { currentTime: target.currentTime } });
    };

    const handleLoadedData = (event: SyntheticEvent<HTMLAudioElement, Event>) => {
        const target = event.target as HTMLAudioElement;
        onLoadedData({ target: { duration: target.duration } });
    };

    return (
        <audio
            src={activeStreamingUrl}
            ref={ref}
            loop={repeat}
            onEnded={onEnded}
            onTimeUpdate={handleTimeUpdate}
            onLoadedData={handleLoadedData}
        />
    );
};

export default Player;
