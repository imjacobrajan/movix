import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTVjNTIyNDg5ZjAxNGI2ODc4Y2U3MzBkNDMwMmMzZSIsInN1YiI6IjY0ZThjZmVlNTI1OGFlMDEwYmQ5NmJkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iQw9Jvn3udDOGt0zfZhf9eDISzAF3T_CxORCRLIozYg";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
