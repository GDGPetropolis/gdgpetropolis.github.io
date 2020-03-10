import axios from "axios";

export default function callMeetUpApi(scrollorstatus, quant, otherparam) {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.meetup.com/GDGPetropolis/events?&sign=true&photo-host=public&fields=featured_photo&${scrollorstatus}&page=${quant}${otherparam}`
      )
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        console.log(`${error} não funcionou a API`);
        reject(error);
      });
  });
}