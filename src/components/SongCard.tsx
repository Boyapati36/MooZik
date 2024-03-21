import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { playPause, setActiveSong } from '../redux/playerSlice';
import { SongDetailed } from 'ytmusic-api';
import PlayPause from './PlayPause';

interface Props {
    song: SongDetailed;
    isPlaying: boolean;
    activeSong: SongDetailed | null;
    searchResults: SongDetailed[] | undefined;
}

const SongCard: React.FC<Props> = ({ song, isPlaying, activeSong, searchResults }) => {
    const dispatch = useDispatch();
    const { name, videoId } = song;

    const handlePauseClick = () => {
        dispatch(playPause(false));
    };

    const handlePlayClick = () => {
        if (searchResults) {
            dispatch(setActiveSong({ "song": song, "currentSongs": searchResults }));
        }
        dispatch(playPause(true));
    };

    return (
        <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
            <div className="relative w-full h-56 group">
                <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.videoId === videoId ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
                    <PlayPause
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        song={song}
                        handlePause={handlePauseClick}
                        handlePlay={handlePlayClick}
                    />
                </div>
                <img alt="song_img" src={song.thumbnails[1].url} className="w-full h-full rounded-lg" />
            </div>

            <div className="mt-4 flex flex-col">
                <p className="font-semibold text-lg text-white truncate">
                    <Link to={`/songs/${videoId}`}>
                        {name}
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SongCard;
