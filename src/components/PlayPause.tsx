import React from 'react';
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';
import { SongDetailed } from 'ytmusic-api';

interface Props {
  isPlaying: boolean;
  activeSong: SongDetailed | null;
  song: SongDetailed;
  handlePause: () => void;
  handlePlay: () => void;
}

const PlayPause: React.FC<Props> = ({ isPlaying, activeSong, song, handlePause, handlePlay }) => (
  isPlaying && activeSong?.videoId === song.videoId ? (
    <FaPauseCircle
      size={35}
      className="text-gray-300"
      onClick={handlePause}
    />
  ) : (
    <FaPlayCircle
      size={35}
      className="text-gray-300"
      onClick={handlePlay}
    />
  )
);

export default PlayPause;
