import React, { useRef, useEffect } from 'react';
import { PlayerProps } from '../../model/PlayerProps';

const Player: React.FC<PlayerProps> = ({ activeSong, isPlaying, volume, seekTime, onEnded, onTimeUpdate, onLoadedData, repeat }) => {

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

    return (
        <audio
            src={activeSong?.hub?.actions[1]?.uri}
            ref={ref}
            loop={repeat}
            onEnded={onEnded}
            onTimeUpdate={onTimeUpdate}
            onLoadedData={onLoadedData}
        />
    );
};

export default Player;
