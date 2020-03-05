import axios from "axios";

export default function callMeetUpApi() {
  return new Promise((resolve, reject) => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://api.meetup.com/GDGPetropolis/events?status=past"
      )
      .then(response => {
        console.log("asdasdasd", response);
        resolve(response);
      })
      .catch(error => {
        console.log(`${error} não funcionou a API`);
        reject(error);
      });
  });
}
