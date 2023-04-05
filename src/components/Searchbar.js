import { useState } from "react"
import './Searchbar.css'

export default function Searchbar() {

    const [search, setSearch] = useState('');

    return(
        <div className="search-container">
            <input
                id="searchbar"
                type="text"
                name="searchbar"
                placeholder="Search Twitter-Clone"
                value = {search}
                onChange={e => setSearch(e.target.value)}
            />
        </div>
    )
}