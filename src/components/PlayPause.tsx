import React from 'react';
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';
import { Song } from '../model/searchModels';

interface Props {
  isPlaying: boolean;
  activeSong: Song | null;
  song: Song;
  handlePause: () => void;
  handlePlay: () => void;
}

const PlayPause: React.FC<Props> = ({ isPlaying, activeSong, song, handlePause, handlePlay }) => (
  isPlaying && activeSong?.title === song.title ? (
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
