import axios from "axios";

function fetchingData(dt) {
  console.log("dt", dt);
  axios.post("http://127.0.0.1:8000tarot", dt).then((res) => {
    return res;
  });
}

export default fetchingData;
