import { ALL_MOVIES } from "./data/movies";

/*
 This is an Icon that you can use to represent the stars if you like.
 Otherwise, you could use a simple ⭐️ emoji, or * character.
*/
// import { StarIcon } from "@heroicons/react/24/solid";

export default function App() {
  const movies = ALL_MOVIES.items;
console.log(movies)
  return (
    <div className="app">
      Welcome to my movies
      {/* movies */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <div 
              key={movie.id} 
              className="group relative flex flex-col bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <div className="aspect-[2/3] w-full overflow-hidden bg-gray-200">
                <img 
                  src={movie.image} 
                  alt={movie.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className={`absolute top-3 right-3 px-2 py-1 rounded-md text-xs font-semibold uppercase tracking-wider shadow-sm ${
                  movie.inTheaters ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {movie.inTheaters ? 'In Theaters' : 'Coming Soon'}
                </div>
              </div>

              <div className="p-3 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-md font-semibold text-gray-900 leading-tight line-clamp-1">
                    {movie.name}
                  </h2>
              
                </div>
                
                <p className="text-sm text-gray-500 font-medium mb-3">
                  {movie.genres.join(' • ')}
                </p>
                
                <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow">
                  {movie.description}
                </p>
                
                <button className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors text-sm">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
