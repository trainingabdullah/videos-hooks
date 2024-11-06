import axios from "axios";

const KEY = "AIzaSyDbRLR0LLf5v0GbJ4A7vCSbtroQZpgw23Q";
// config API setting && KEY 
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 15,
    key: KEY,
  },
});
