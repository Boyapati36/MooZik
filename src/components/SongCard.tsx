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
        <div className="flex md:flex-col flex-row w-[240px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
            <div className="relative md:w-full md:h-56 w-10 h-10 group">
                <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.videoId === videoId ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
                    <PlayPause
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        song={song}
                        handlePause={handlePauseClick}
                        handlePlay={handlePlayClick}
                    />
                </div>
                <img alt="song_img" src={song.thumbnails[1]?.url ? song.thumbnails[1]?.url: song.thumbnails[0]?.url} className="md:w-full md:h-full rounded-lg w-10 h-10" />
            </div>

            <div className="md:mt-4 md:ml-0 md:w-full mt-2 ml-2 w-32 flex flex-col overflow-hidden">
                <p className="font-semibold object-scale-down md:text-lg text-white truncate text-sm">
                    <Link to={`/song/${videoId}/${song.artist.artistId}`}>
                        {name}
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SongCard;
