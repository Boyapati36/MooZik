import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useGetHomeQuery } from '../../redux/youtubeMusicApi';
import Error from '../ErrorLoader/Error';
import Loader from '../ErrorLoader/Loader';
import { DiscoverContent } from '../../model/DiscoverContent';
import SongCard from '../SongCard';
import { SongDetailed } from 'ytmusic-api';

const Discover: FC = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state: RootState) => state.player);
  const { data, isFetching, error } = useGetHomeQuery(undefined);
  const [activeTab, setActiveTab] = useState(data?.at(0)?.title);

  if (isFetching) return <Loader title="Loading songs..." />;

  if (error) return <Error />;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, newActiveTab: string) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="flex flex-col">
      <div className="w-full flex items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="w-full font-bold text-5xl text-white text-center">Discover</h2>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data && data.map((items: DiscoverContent, index: number) => (
          <div key={index}>
            {items.contents[0]?.type === "SONG" && (
              <>
                <h3 className="font-bold text-2xl sm:text-3xl mb-4" style={{ color: generateRandomColor() }}>{items.title}</h3>
                <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                  {items.contents.map((song: SongDetailed, songIndex: number) => (
                    <SongCard key={songIndex} song={song} activeSong={activeSong} isPlaying={isPlaying} searchResults={items.contents} />
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discover;
