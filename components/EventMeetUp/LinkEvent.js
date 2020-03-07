import React from "react"; 
import styled from "styled-components";

const Link = styled.div`
grid-column-start: 2;
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

export default function LinkEvent(props) {
  function changeTxt() {
    if(props.informationLink.status === 'past') {
      return('Sobre o evento')} 
      else if(props.informationLink.status === 'upcoming')
      { return('Marque sua presença')} 
  }
   return (
    <Link>
      <h4><a href={props.informationLink ? props.informationLink.link : '#'} target='_blank'>{props.informationLink ? 
      changeTxt() : ' '}</a></h4>
    </Link>
  )
}