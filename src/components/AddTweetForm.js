import { addTweet } from "../utils.js/apiCalls"

export default function AddTweetForm(){
    return (
        <form onSubmit={ addTweet }>
            <input type="text" name="tweet" placeholder="What's happening?"/>
            <button type="submit">Tweet</button>
        </form>
    )
}