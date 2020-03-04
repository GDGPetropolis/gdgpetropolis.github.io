import React from "react"; 
import styled from "styled-components";
import useMeetUpEvents from "../../hooks/useMeetUpEvents";

export default function index() {
  // Use the custom hook
  const { events } = useMeetUpEvents();

  return (
    <div>
      {JSON.stringify(events)}
    </div>
  );
}