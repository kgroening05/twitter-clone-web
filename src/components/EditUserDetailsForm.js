import { useState } from "react"
import axios from "axios"
import { useNavigate, useOutletContext } from 'react-router-dom'

export default function EditUserDetailsForm(){

    const [ user ] = useOutletContext()
    const [ username, setUsername ] = useState(user.username);
    const [ email, setEmail ] = useState(user.email);
    
    async function useUpdateUsers(event){
        event.preventDefault();
        let navigate = useNavigate();
        const username = event.target.username.value
        const email = event.target.email.value
        const update = await axios.put(
            `api/user/`,
            {username, email},
        )
        if(update.data.success){
            console.log('success')
            navigate('/')
        }
    }
    
    return(
        <form onSubmit={ useUpdateUsers }>
            <label htmlFor="username">Username:</label>
            <input type="text" 
                id="username" 
                name="username" 
                value={username} 
                onChange={e => setUsername(e.target.value)}
            />
            <label htmlFor="email">Email:</label>
            <input type="text"
                id="email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    )
}
