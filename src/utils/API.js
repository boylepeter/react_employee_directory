import axios from "axios";
const BASEURL = "https://randomuser.me/api/";
const query = "?results=100";

export default {
  search: function() {
    return axios.get(BASEURL + query);
  }
};
