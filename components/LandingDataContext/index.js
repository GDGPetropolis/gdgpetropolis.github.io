import React, { useState, useEffect } from "react";
import callMeetUpApi from "../../libs/meetUpBase";

const LandingDataContext = React.createContext([{}, () => {}]);

const LandingDataProvider = props => {
  // Global State
  const [state, setState] = useState({
    stateTeste: "Hello",
    Landings: [],
    events: []
  });

  useEffect(() => {
    let eventMeet = []
    callMeetUpApi('scroll=future_or_past', '3').then(response => {
      eventMeet = response.data.slice(0).reverse();
      setState({ ...state, events: eventMeet});
    })
    if(eventMeet.length < 3){
      callMeetUpApi('status=past', '2', '&desc=true').then(response => {
        for(var n in response.data){
          eventMeet.push(response.data[n]);
        }
        setState({ ...state, events: eventMeet});
      })
    }
  }, []);

  return (
    <LandingDataContext.Provider value={[state, setState]}>
      {props.children}
    </LandingDataContext.Provider>
  );
};

export { LandingDataContext, LandingDataProvider };
