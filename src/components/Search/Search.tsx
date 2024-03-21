import React from 'react';
import { useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';
import { SongDetailed } from 'ytmusic-api';
import { RootState } from '../../redux/store';
import { useGetSearchSongQuery } from '../../redux/youtubeMusicApi';
import Error from '../ErrorLoader/Error';
import Loader from '../ErrorLoader/Loader';
import SongCard from '../SongCard';

const Search: React.FC = () => {
  const { searchTerm } = useParams<string>();
  const { activeSong, isPlaying } = useSelector((state: RootState) => state.player);
  const { data, isFetching, error } = useGetSearchSongQuery({"q": searchTerm || ""});

  const songs: SongDetailed[] | undefined = data;

  if (isFetching) return <Loader title={`Searching ${searchTerm}...`} />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Showing results for <span className="font-black">{searchTerm}</span></h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {songs?.map((song, i) => (
          <SongCard
            key={song.videoId}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            searchResults={data}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
