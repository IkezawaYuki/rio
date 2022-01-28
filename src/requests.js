const API_KEY = import.meta.env.VITE_API_KEY;

export const requests = {
  feachNetflixOriginals:`/discover/movie?api_key=${API_KEY}`,
}