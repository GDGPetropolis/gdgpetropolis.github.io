import axios from "axios";

export default function callMeetUpApi() {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://api.meetup.com/GDGPetropolis/events`)
      .then(response => {
        resolve(response);
        console.log(response);
      })
      .catch(error => {
        console.log(`${error} não funcionou a API`);
        reject(error);
      });
  });
}