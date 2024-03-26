import React from 'react';

function TopCharts() {
  const charts = [
    { name: "Top 50", description: "Lorem ipsum dolor sit amet", image: "https://via.placeholder.com/150" },
    { name: "Top Albums", description: "Lorem ipsum dolor sit amet", image: "https://via.placeholder.com/150" },
    { name: "Top Tracks", description: "Lorem ipsum dolor sit amet", image: "https://via.placeholder.com/150" },
    { name: "Top Artists", description: "Lorem ipsum dolor sit amet", image: "https://via.placeholder.com/150" },
    { name: "Top Genres", description: "Lorem ipsum dolor sit amet", image: "https://via.placeholder.com/150" },
    { name: "Trending Now", description: "Lorem ipsum dolor sit amet", image: "https://via.placeholder.com/150" },
    { name: "Weekly Hits", description: "Lorem ipsum dolor sit amet", image: "https://via.placeholder.com/150" }
  ];

  return (
    <main className="grid place-items-start m">
      <div className='m-10 max-w-[80vw]'>
        <h1 className="text-3xl sm:text-2xl md:text-3xl font-bold text-gray-200 mb-5">Top Charts</h1>
        <section className="flex overflow-x-auto  space-x-4">
          {charts.map((chart, index) => (
            <div key={index} className="bg-gray-900 shadow-lg rounded p-3" style={{ minWidth: "150px" }}>
              <div className="group relative">
                <img className="w-full md:w-72 block rounded" src={chart.image} alt="" />
                <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                  <button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                    <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                  </button>

                  <button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-play-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                    </svg>
                  </button>

                  <button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-white text-lg">{chart.name}</h3>
                
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}

export default TopCharts;
