import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Song } from '../model/searchModels';
import { playPause, setActiveSong } from '../redux/playerSlice';
import { useGetStreamingDataQuery } from '../redux/youtubeMusicApi';
import { StreamingResponse } from '../model/StreamingResponse';
import PlayPause from './PlayPause';

interface Props {
    song: Song;
    isPlaying: boolean;
    activeSong: Song | null;
    searchResults: Song[] | undefined;
}

const SongCard: React.FC<Props> = ({ song, isPlaying, activeSong, searchResults }) => {
    const dispatch = useDispatch();
    const { title, album, artists, id, thumbnail } = song;
    const { data, isFetching, error} = useGetStreamingDataQuery(id);

    const handlePauseClick = () => {
        dispatch(playPause(false));
    };

    const handlePlayClick = () => {
        if(searchResults){
            dispatch(setActiveSong({ "song": song, "streaming": data? data: null, "currentSongs": searchResults }));
            dispatch(playPause(true));
        }
    };

    return (
        <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
            <div className="relative w-full h-56 group">
                <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.id === id ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
                    <PlayPause
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        song={song}
                        handlePause={handlePauseClick}
                        handlePlay={handlePlayClick}
                    />
                </div>
                <img alt="song_img" src={song.thumbnail.contents[0].url} className="w-full h-full rounded-lg" />
            </div>

            <div className="mt-4 flex flex-col">
                <p className="font-semibold text-lg text-white truncate">
                    <Link to={`/songs/${id}`}>
                        {title}
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SongCard;
