import React from "react"; 
import styled from "styled-components";


export function MenuLinks(props) {
  return(
    <a style={{color: '#afafaf'}} href={props.link ? props.link : '#'} target={props.target ? props.target : '_self'}>{props.linkName ? props.linkName : 'Link Desativado'} 
    </a>
  )
}