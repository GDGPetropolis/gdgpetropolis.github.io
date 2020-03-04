import { useContext } from "react";
import { LandingDataContext } from "../components/LandingDataContext";

const useMeetUpEvents = () => {
  // Desconstruct state from context
  const [state, setState] = useContext(LandingDataContext);

  // Create custom functions and whatever u want here
  const setEvents = list => {
    setState({ ...state, events: list });
  };

  // Export state from context and custom functions
  return {
    events: state.events,
    setEvents
  };
};

export default useMeetUpEvents;
