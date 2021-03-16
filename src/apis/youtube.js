import axios from "axios";

const KEY = "AIzaSyC_rZ_-ozc4DhD0VPQ1JnlY9S4KJAVYzqE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});
