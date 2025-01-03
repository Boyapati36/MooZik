import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AroundYou from './components/AroundYou';
import ArtistDetails from './components/ArtistDetails';
import Discover from './components/Home/Discover';
import MusicPlayer from './components/musicPlayer/MusicPlayer';
import Search from './components/Search/Search';
import Searchbar from './components/Search/Searchbar';
import Sidebar from './components/Sidebar';
import SongDetails from './components/SongDetails';
import TopArtists from './components/TopArtists';
import TopCharts from './components/TopCharts';
import TopPlay from './components/TopPlay';
import { RootState } from './redux/store';

function App() {
  const { activeSong } = useSelector((state: RootState) => state.player);

  return (
    <div className="relative flex">
      <div className='w-64 flex-none'>

      <Sidebar />
      </div>
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
        
        
        

        <Searchbar />

        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<Discover />}/>
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/around-you" element={<AroundYou />} />
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
            </Routes>
          </div>
          <div className="xl:sticky relative top-0 h-fit">
            <TopPlay />
          </div>
        </div>
      </div>

      {activeSong?.name && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
}

export default App;
