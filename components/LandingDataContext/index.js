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
    callMeetUpApi().then(response => {
      setState({ ...state, events: response.data });
    });
  }, []);

  return (
    <LandingDataContext.Provider value={[state, setState]}>
      {props.children}
    </LandingDataContext.Provider>
  );
};

export { LandingDataContext, LandingDataProvider };
