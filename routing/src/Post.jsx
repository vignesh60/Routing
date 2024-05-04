import React from 'react'
import { Link } from 'react-router-dom'
/* import Img1 from './assets/img1.jpg'
import Img2 from './assets/img2.jpg'
import Img3 from './assets/img3.jpg'
import Img4 from './assets/img4.jpg' */


const Post = ({posts}) => {
  return (
    <article className='post'>
      {/* <img src={Img1} alt="" /> */}
      <span className='close'>X</span>
      <Link to={`post/${posts.id}`}><h2>{posts.title}</h2>
      <p className='postDate'>{posts.datetime}</p>
      </Link>
      <p className="postBody">{
        (posts.body).length <= 25 ? posts.body : `${(posts.body).slice(0,25)}....`
      }</p>
    </article>
  )
}

export default Post