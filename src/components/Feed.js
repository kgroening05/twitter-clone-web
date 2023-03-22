import { getPosts } from "../utils.js/apiCalls"
import { useState, useEffect } from "react"
import FeedCard from "./FeedCard";

export default function Feed() {
  const [ posts, setPosts ] = useState(null);
  
  useEffect(()=>{
    getPosts()
    .then(res => {
      setPosts(res.posts)
    })
  }, [])

  return (
    <div className="feed">
      {
        posts
        ? posts.map((el)=>{
          return(<FeedCard author={ el.author.username } body={el.body} id={el._id} profilePic={el.author.profilePic}/>)
        })
        : <p>nothin</p>
      }
    </div>
  )
}