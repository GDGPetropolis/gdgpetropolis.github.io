import React from "react"; 
import styled from "styled-components";
import { MenuLinks } from "./MenuLinks";

const Nav = styled.div`
display: flex;
ul {
  display: inline-flex;
  list-style: none;
  margin: 0;
}
a {
  text-decoration: none;
  padding: 10px;
  color: 'white';
  font-weight: bolder;
  font-size: 1rem;
}
a:hover {
  font-weight: bold;
}
`

export function MainNav(props) {
  return(
    <Nav>
      <ul>
        <li><MenuLinks link="#" linkName="Sobre nós" /></li>
        <li><MenuLinks link="#" linkName="Eventos"/></li>
        <li><MenuLinks link="#" linkName="Contato"/></li>
      </ul>
    </Nav>
  )
}