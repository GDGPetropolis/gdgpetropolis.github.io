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
  return (
    <Link>
      <h4><a href={props.information.link} target='_blank'>Marque Sua Presença!!</a></h4>
    </Link>
  )
}