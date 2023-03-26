import { addTweet } from "../utils.js/apiCalls"
import { useState } from "react"
import './AddTweetForm.css'

export default function AddTweetForm({ user, updateTweets, setUpdateTweets }){

    const [ tweetTest, setTweetText ] = useState('')

    const profileDivStyles = {
        background: `center / contain no-repeat url(${user.profilePic})`,
      }

    async function handleSubmit(e) {
        const res = await addTweet(e)
        if (res === 1) {
            setUpdateTweets(updateTweets + 1)
            setTweetText('')
        }
    }

    return (
        <div className="add-tweet">
            <div style={profileDivStyles} className="profile-pic" alt="" ></div>
            <form onSubmit={ e=>handleSubmit(e) } className="add-tweet-form">
                <input 
                    type="text" 
                    name="tweet" 
                    placeholder="What's happening?"
                    value={tweetTest} 
                    onChange={e => setTweetText(e.target.value)}
                />    
                <button type="submit">Tweet</button>
            </form>
        </div>
    )
}