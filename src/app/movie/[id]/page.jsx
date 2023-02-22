async function getMovie(movieId) {
        const res = await fetch(`https://api.themoviedb.org/3/movie/
        ${movieId}?api_key=${process.env.API_KEY}`);
        return await res.json();
};

async function MoviePage({params}) {
    const movieId = params.id;
    const movie = await getMovie(movieId);
  
    return (
    <div>
        <h1>{movie.title || movie.name}</h1>
    </div>
  )
};

export default MoviePage;