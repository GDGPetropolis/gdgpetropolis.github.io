import React from "react"; 
import styled from "styled-components";
import useMeetUpEvents from "../../hooks/useMeetUpEvents";

export default function index() {
  // Use the custom hook
  const { events } = useMeetUpEvents();

  return (
    <div>
      <button onClick={() => meetUp()}>teste</button>
      {JSON.stringify(events)}
    </div>
  );
}