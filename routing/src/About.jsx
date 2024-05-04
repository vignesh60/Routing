import React from 'react'
import Img from './assets/img2.jpg'

const About = () => {
  return (
    <main className="About" style={{padding: "1rem"}}>
      <div className="about-left">
        <img src={Img} alt="" />
      </div>
      <div className="about-right">
      <h2>About</h2>
      <p style={{marginTop: '1rem'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel molestias ipsum placeat nesciunt recusandae eius praesentium voluptatem dolores perspiciatis laudantium, incidunt omnis earum repellendus in dolore, iure porro, aliquam illum?</p>
      <p style={{marginTop: '1rem'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel molestias ipsum placeat nesciunt recusandae eius praesentium voluptatem dolores perspiciatis laudantium, incidunt omnis earum repellendus in dolore, iure porro, aliquam illum? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel molestias ipsum placeat nesciunt recusandae eius praesentium voluptatem dolores perspiciatis laudantium, incidunt omnis earum repellendus in dolore, iure porro, aliquam illum?</p>
      </div>
    </main>
  )
}

export default About