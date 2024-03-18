import React from 'react';
import { useSelector } from 'react-redux';

import SongCard from '../SongCard';
import { Song } from '../../model/searchModels'; // Assuming the model file path and types are correct
import { SearchQueryParams } from '../../model/searchQueryParam';
import { RootState } from '../../redux/store';
import { useGetSearchQuery } from '../../redux/youtubeMusicApi';
import Error from '../Error';
import Loader from '../Loader';
import { useParams } from 'react-router-dom';

const Search: React.FC = () => {
  const { q, shelf } = useParams<{ q: string; shelf: string }>();
  const { activeSong, isPlaying } = useSelector((state: RootState) => state.player);
  const { data, isFetching, error } = useGetSearchQuery({"q": q ||"", "shelf": shelf || ""});

  const songs: Song[] | undefined = data?.results.data[0].contents;

  if (isFetching) return <Loader title={`Searching ${q}...`} />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Showing results for <span className="font-black">{q}</span></h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {songs?.map((song, i) => (
          <SongCard
            key={song.id}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            searchResults={data?.results?.data[0]?.contents}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
