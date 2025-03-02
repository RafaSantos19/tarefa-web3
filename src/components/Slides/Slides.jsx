import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Fade, Zoom, Slide } from 'react-slideshow-image'

function Slides() {

  const img = [
    {
      url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
    },
    {
      url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    },
  ]

  const divStyle = {
    display: 'flex',
    alignItens: 'center',
    justifyContent: 'center',
    height: '400px',
    backgroundSize: 'cover'
  }

  return (
    <Slide>
      <div className="each-slide-effect">
        <div style={{ 'backgroundImage': `url(${images[0]})` }}>
          <span>Slide 1</span>
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ 'backgroundImage': `url(${images[1]})` }}>
          <span>Slide 2</span>
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ 'backgroundImage': `url(${images[2]})` }}>
          <span>Slide 3</span>
        </div>
      </div>
    </Slide>
  )
}

export default Slides