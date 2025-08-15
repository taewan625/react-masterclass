const url =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Mzg5YWQyMjcwODYyMTJjNzkyNThlMThmNDY1NzUyNiIsIm5iZiI6MTc1NTIyODk0Mi4xMTgsInN1YiI6IjY4OWVhYjBlMDE3ZDBiYzllY2M3MGM0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3SAJXEKmWQrYNF2YtqNFtG1YTOPqM4EwSKUKSqPbs9E";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_TOKEN}`,
  },
};

interface IMoive {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
}

export interface IGetMoviesResult {
  dates: {
    maximum: Date;
    minimun: Date;
  };
  page: number;
  results: IMoive[];
  total_pages: number;
  total_results: number;
}

export function getMovies() {
  return fetch(url, options)
    .then((res) => res.json())
    .catch((err) => console.error(err));
}
