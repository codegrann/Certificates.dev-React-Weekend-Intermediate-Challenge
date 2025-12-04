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
      <div className="movie-list bg-green-500 flex justify-start flex-wrap mx-auto my-8">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card border m-4 p-4 bg-white rounded-lg shadow-lg min-w-[250px] max-w-[300px]">
          <img src={movie.image} alt={movie.name} className="w-full h-auto rounded-md mb-4" />
          <h2 className="text-2xl font-bold mb-2">{movie.name}</h2>
          <p className="text-gray-700 mb-2">{movie.description}</p>
          <p className="text-yellow-500 mb-2">Rating: {'⭐'.repeat(movie.rating)}</p>
          <p className="text-gray-600 mb-2">Genres: {movie.genres.join(', ')}</p>
          <p className={`mb-2 ${movie.inTheaters ? 'text-green-600' : 'text-red-600'}`}>
            {movie.inTheaters ? 'In Theaters' : 'Not in Theaters'}
          </p>
        </div>
      ))}
      </div>
    </div>
  );
}
