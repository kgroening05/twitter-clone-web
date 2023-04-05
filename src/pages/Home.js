import Feed from '../components/Feed';
import AddTweetForm from '../components/AddTweetForm';
import { useState } from 'react';
import { useOutletContext } from "react-router-dom"
import Searchbar from '../components/Searchbar';

export default function Home () {
    const [ user ] = useOutletContext()
    const [ updateTweets, setUpdateTweets ] = useState(0)

    return (
        <>
            <Searchbar />
            {
                user
                ? <AddTweetForm user={user} setUpdateTweets={setUpdateTweets} updateTweets={updateTweets} />
                : null
            }
            <Feed updateTweets={updateTweets}/>
        </>
    )
}