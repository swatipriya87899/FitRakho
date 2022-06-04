import React from 'react'
import ReactPlayer from 'react-player'
import './Card.css';

const Card = (props) => {
  return (
    <div className='card'>
      <ReactPlayer url={props.video} width="100%" height="50%" controls={true} playing={true} muted/>
      <div className='card_heading'>{props.heading}</div>
      <div className='card_text'>{props.text}</div>
      <div className='card_tag_box'>  {props.tags.map((tag)=><div className='card_tags'>{tag}</div>)} </div>
    </div>
  )
}

export default Card