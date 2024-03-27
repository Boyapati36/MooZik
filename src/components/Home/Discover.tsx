import { FC } from 'react';
import { useSelector } from 'react-redux';
import { SongDetailed } from 'ytmusic-api';
import { DiscoverContent } from '../../model/DiscoverContent';
import { RootState } from '../../redux/store';
import { useGetHomeQuery } from '../../redux/youtubeMusicApi';
import Error from '../ErrorLoader/Error';
import Loader from '../ErrorLoader/Loader';
import SongCard from '../SongCard';

const Discover: FC = () => {
  const { activeSong, isPlaying } = useSelector((state: RootState) => state.player);
  const { data, isFetching, error } = useGetHomeQuery(undefined);

  if (isFetching) return <Loader title="Loading songs..." />;

  if (error) return <Error />;

  const generateRandomColor = () => {

    const hue = Math.floor(Math.random() * (160 - 140 + 1) + 140);

    const saturation = Math.floor(Math.random() * (80 - 60 + 1) + 60);
    const lightness = Math.floor(Math.random() * (70 - 50 + 1) + 50);

    const hslToRgb = (h: number, s: number, l: number): [number, number, number] => {
       let r: number, g: number, b: number;
       if (s === 0) {
         r = g = b = l;
       } else {
         const hue2rgb = (p: number, q: number, t: number): number => {
           if (t < 0) t += 1;
           if (t > 1) t -= 1;
           if (t < 1 / 6) return p + (q - p) * 6 * t;
           if (t < 1 / 2) return q;
           if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
           return p;
         };
         const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
         const p = 2 * l - q;
         r = hue2rgb(p, q, h + 1 / 3);
         g = hue2rgb(p, q, h);
         b = hue2rgb(p, q, h - 1 / 3);
       }
       return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    };

    const rgbToHex = (r: number, g: number, b: number): string => {
       return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    };
   
    const [r, g, b] = hslToRgb(hue / 360, saturation / 100, lightness / 100);
    return rgbToHex(r, g, b);
   }
   

  return (
    <div className="flex flex-col">
      <div className="w-full flex items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="w-full font-bold text-5xl text-white text-center">Discover</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {data && data.map((items: DiscoverContent, index: number) => (
          <div key={index}>
            {items.contents[0]?.type === "SONG" && (
              <>
                <h3 className="font-bold text-center md:text-left text-2xl md:text-3xl mb-4" style={{ color: generateRandomColor() }}>{items.title}</h3>
                <div className="flex flex-wrap justify-center gap-8">
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
