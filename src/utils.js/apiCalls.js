import axios from "axios"

export const domain = 'http://localhost:3001/'
export const newPostURI = `${domain}api/posts/new-post`
export const googleAuth = `${domain}api/login/google-auth`

axios.defaults.withCredentials = true
axios.defaults.baseURL = domain

export async function getPosts(){
    const response = await axios.get(`api/posts`)
    return await response.data
}

export async function useUpdateUsers(event){

    event.preventDefault();
    const username = event.target.username.value
    const email = event.target.email.value
    const update = await axios.put(
        `api/user/`,
        {username, email},
    )
    if(update.data.success){
        console.log('success')
    }
}

export async function addTweet(event){

    event.preventDefault();
    const tweet = event.target.tweet.value
    const update = await axios.post(
        `api/posts/new-post`,
        {tweet},
    )
    if(update.data.success){
        console.log('success')
    }
}
