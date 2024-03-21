import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Song } from '../../model/searchModels';
import { nextSong, playPause, prevSong, setActiveStreamingUrl } from '../../redux/playerSlice';
import { RootState } from '../../redux/store';
// import { useGetStreamingDataQuery } from '../../redux/youtubeMusicApi';
import Controls from './Controls';
import Player from './Player';
import Seekbar from './Seekbar';
import Track from './Track';
import VolumeBar from './VolumeBar';
import { SongDetailed } from 'ytmusic-api';

const MusicPlayer: React.FC = () => {
  const { activeSong, currentSongs, currentIndex, isPlaying } = useSelector((state: RootState) => state.player);
  const [duration, setDuration] = useState<number>(0);
  const [seekTime, setSeekTime] = useState<number>(0);
  const [appTime, setAppTime] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0.3);
  const [repeat, setRepeat] = useState<boolean>(false);
  const [shuffle, setShuffle] = useState<boolean>(false);
  // const {data, isFetching, error} = useGetStreamingDataQuery(currentSongs[currentIndex].id);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentSongs.length) dispatch(playPause(true));
  }, [currentIndex, dispatch, currentSongs.length]);

  // useEffect(() => {
  //   if(data) dispatch(setActiveStreamingUrl(data));
  // }, [data])

  const handlePlayPause = () => {
    if (isPlaying) {
      dispatch(playPause(false));
    } else {
      dispatch(playPause(true));
    }
  };

  const handleNextSong = () => {

    let index: number;
    if (!shuffle) {
      dispatch(nextSong((currentIndex + 1) % currentSongs.length));
    } else {
      dispatch(nextSong(Math.floor(Math.random() * currentSongs.length)));
    }
  };

  const handlePrevSong = () => {
    let index: number;
    if (currentIndex === 0) {
      index = currentSongs.length - 1;
    } else if (shuffle) {
      index = Math.floor(Math.random() * currentSongs.length);
    } else {
      index = currentIndex - 1;
    }
    dispatch(prevSong(index));
  };

  return (
    <div className="relative sm:px-12 px-8 w-full flex items-center justify-between">
      <Track isPlaying={isPlaying} isActive={true} activeSong={activeSong as SongDetailed} />
      <div className="flex-1 flex flex-col items-center justify-center">
        <Controls
          isPlaying={isPlaying}
          repeat={repeat}
          setRepeat={setRepeat}
          shuffle={shuffle}
          setShuffle={setShuffle}
          currentSongs={currentSongs}
          handlePlayPause={handlePlayPause}
          handlePrevSong={handlePrevSong}
          handleNextSong={handleNextSong}
        />
        <Seekbar
          value={appTime}
          min={0}
          max={duration}
          onInput={(event) => setSeekTime(Number(event.target.value))}
          setSeekTime={setSeekTime}
          appTime={appTime}
        />
        <Player
          videoId={activeSong?.videoId}
          volume={volume}
          isPlaying={isPlaying}
          seekTime={seekTime}
          repeat={repeat}
          onEnded={handleNextSong}
          onTimeUpdate={(event: { target: { currentTime: React.SetStateAction<number>; }; }) => setAppTime(event.target.currentTime)}
          onLoadedData={(event: { target: { duration: React.SetStateAction<number>; }; }) => setDuration(event.target.duration)}
        />
      </div>
      <VolumeBar value={volume} min={0} max={1} onChange={(event) => setVolume(Number(event.target.value))} setVolume={setVolume} />
    </div>
  );
};

export default MusicPlayer;
