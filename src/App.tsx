import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { searchSong } from './services/youtubeServices'
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Searchbar from './components/Searchbar';
import Discover from './components/Discover';
import TopArtists from './components/TopArtists';
import AroundYou from './components/AroundYou';
import ArtistDetails from './components/ArtistDetails';
import SongDetails from './components/SongDetails';
import MusicPlayer from './components/MusicPlayer';
import TopPlay from './components/TopPlay';
import TopCharts from './components/TopCharts';
import Search from './components/Search';
import { DatumContent } from './model/searchModels';

function App() {
  const[activeSong, setActiveSong] = useState<DatumContent | null>(null);

  return (
    <div className="relative flex">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
        <Searchbar />

        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<Discover />} />
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

      {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
}

export default App;
