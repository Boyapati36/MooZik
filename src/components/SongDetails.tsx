import React from 'react';
// import { useParams } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import Error from './ErrorLoader/Error';
// import Loader from './ErrorLoader/Loader';
// import { setActiveSong, playPause } from '../redux/playerSlice';
// import { useGetSongDetailsQuery, useGetArtistSongsQuery } from '../redux/youtubeMusicApi';
// import { RootState } from '../redux/store';

const SongDetails: React.FC = () => {
  // const dispatch = useDispatch();
  // const { songid, id: artistId } = useParams<{ songid: string; id: string }>();
  // const { activeSong, isPlaying } = useSelector((state: RootState) => state.player);

  // const { data, isFetching: isFetchinRelatedSongs, error } = useGetArtistSongsQuery({"q": artistId || ""});
  // const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery({"q": songid || ""});

  // if (isFetchingSongDetails && isFetchinRelatedSongs) return <Loader title="Searching song details" />;

  // if (error) return <Error />;

  // const handlePauseClick = () => {
  //   dispatch(playPause(false));
  // };

  // const handlePlayClick = (song: any) => {
  //   dispatch(setActiveSong(song));
  //   dispatch(playPause(true));
  // };

  return (
    <div className="flex flex-col">
      {/* <DetailsHeader artistId={artistId} songData={songData} /> */}

      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics:</h2>

        <div className="mt-5">
          {/* {songData?.sections[1].type === 'LYRICS' ? (
            songData?.sections[1]?.text.map((line: string, i: number) => (
              <p key={`lyrics-${line}-${i}`} className="text-gray-400 text-base my-1">
                {line}
              </p>
            ))
          ) : (
            <p className="text-gray-400 text-base my-1">Sorry, No lyrics found!</p>
          )} */}
        </div>
      </div>

      {/* <RelatedSongs
        data={data}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      /> */}
    </div>
  );
};

export default SongDetails;