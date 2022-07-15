import axios from "axios";

function fetchUsers(query, page) {
  if (!query) {
    return Promise.reject("query should be provided");
  }
  return axios.get(
    `https://api.github.com/search/users?q=${query}&page=${page}&per_page=7`
    )
}
export { fetchUsers };