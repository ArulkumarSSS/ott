import axios from "axios";
const token =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjYwNzI4MzYwMjk3ZTE5ODViYTAyYjVlNWJlN2VmNCIsInN1YiI6IjY2MDM3ODg0NjJmMzM1MDE3ZDU1MjlkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dLm8a_YdOnt2sPWZVEc7dwbL7RdbxBv-5uxCakR959Y";

async function APIRequest(EndPoint)
{
    let responseX;
await axios
  .get(`https://api.themoviedb.org/3/${EndPoint}`, {
    headers: {
      accept: "application/json",
      Authorization: token,
    },
  })
  .then((response) => {
    responseX = response;
    
  });
console.log(responseX);
  return responseX
}
export default APIRequest;