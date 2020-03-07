import React from "react"; 
import styled from "styled-components";

const Photo = styled.div`
min-width: 80px;
width: 100%;
box-sizing: border-box;
overflow: hidden;
grid-column-end: 2;
img {
  width: 100%;
}
.backlogo{
  background-color: white;
}
`

export default function ImgEvent(props) {
  return (
    <Photo>
      <img src={props.imgEvents ? props.imgEvents.featured_photo.photo_link : 'img/gdg_petropolis_logocomimagem.svg'} alt={props.imgEvents ? props.imgEvents.name : 'GDG Petrópolis MeetUp'} className={props.imgEvents ? '' : '.backlogo'} />
    </Photo>
  )
}