import React from "react"; 
import styled from "styled-components";
import useMeetUpEvents from "../../hooks/useMeetUpEvents";
import ImgEvent from "./ImgEvent";
import InfoEvent from "./InfoEvent";
import LinkEvent from "./LinkEvent";

const Calendar = styled.div `
box-sizing: border-box;
width: 40%;
padding: 1rem 1.2rem;
background-color: ${props => props.statusBack};
margin: 10px auto 0 auto;
color: #fff;
display: grid;
grid-template-columns: 30% 70%;
grid-column-gap: 10px;
border: 1px solid #b5b5b5;
border-radius: 5px;
filter: ${props => props.status};
-webkit-box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.66);
-moz-box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.66);
box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.66);
`

export default function index(props) {
  // Use the custom hook
  const { events, setEvents } = useMeetUpEvents();
  return (
    <div>
    {events.length != 0 ? events.map(element => {
        if(element.status === 'past'){
          return(
            <Calendar status='grayscale(100%)' statusBack='#bfbfbf'>
              <ImgEvent imgEvents={element} />
              <InfoEvent information={element} />
              <LinkEvent information={element} />
            </Calendar> 
          )} else if(element.status === 'upcoming') {
            <Calendar status='grayscale(0%)' statusBack='white'>
              <ImgEvent imgEvents={element} />
              <InfoEvent information={element} />
              <LinkEvent information={element} />
            </Calendar> 
          }
        }) : 'Carregando'
    }
    </div>
  )
}