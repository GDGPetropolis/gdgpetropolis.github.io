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
    callMeetUpApi('future_or_past', '5').then(response => {
      let eventMeet = [];
      eventMeet = response.data.slice(0).reverse();
      setState({ ...state, events: eventMeet});
    });
  }, []);

  return (
    <LandingDataContext.Provider value={[state, setState]}>
      {props.children}
    </LandingDataContext.Provider>
  );
};

export { LandingDataContext, LandingDataProvider };
