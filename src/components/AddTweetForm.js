import { newPostURI } from "../utils.js/apiCalls"

export default function AddTweetForm(){
    return (
        <form action={ newPostURI } method='POST'>
            <input type="text" placeholder="What's happening?"/>
            <button type="submit">Tweet</button>
        </form>
    )
}