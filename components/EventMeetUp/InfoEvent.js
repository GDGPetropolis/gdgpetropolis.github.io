import React from "react"; 
import styled from "styled-components";

const Info = styled.div`
color: white;
grid-column-start: 2;
color: white;
h2 {
  font-size: 1rem;
  margin: 0 0 0.5rem 0;
}
h4 {
  font-size: .9rem;
  margin: 0 0 0.2rem 0;
}
p {
  font-size: .8rem;
  margin: 0 0 0.2rem 0;
}
a {
  color: black;
}
a:hover {
  color: black;
}
`
/*
      <p>{information.local_date} // {information.local_time}</p>
      <p>{information.yes_rsvp_count}</p>
      <p>Local: {information.venue.name}</p>
      <p>Endereço: {information.venue.address_1}</p>*/

export default function InfoEvent(props) {
  let eventDate = props.information ? props.information.local_date.split('-').reverse().join('/') : ' ';
  let adress = props.information.venue ? props.information.venue.address_1 : 'petrópolis';
  return (
    <Info>
      <h2>{props.information.name ? props.information.name : 'Nome do evento'}</h2>
      <h4>{eventDate ? eventDate : 'DD/MM/YYYY'} | {`\u{231A}`} {props.information.local_time ? props.information.local_time : 'hr'}</h4>
      <p>Confirmados: {props.information.yes_rsvp_count ? props.information.yes_rsvp_count : ' '} {`\u{1F44A}`}</p>
      <p><a href={'https://www.google.com/maps/search/'+adress} target='_blank'>Local: {props.information.venue ? props.information.venue.name : 'A confirmar!'}</a></p>
    </Info>
  )
}