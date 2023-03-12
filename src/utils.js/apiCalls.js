export async function getPosts(){
    const response = await fetch(`${domain}api/posts`)
    const posts = await response.json()
    return posts
}

export const domain = 'http://localhost:3001/'
export const newPostURI = `${domain}api/posts/new-post`
export const googleAuth = `${domain}api/login/google-auth`