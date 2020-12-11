import React, { useState} from 'react';
import "./Search.css";
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

function Search() {

    const [input, setInput] = useState("");
    const history = useHistory();

    const search = e => {
        e.preventDefault();
        history.push("/search")



    }


    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon" />
                <input value={input} onChange={e => setInput(e.target.value)}/>
                <MicIcon />
            </div>

            <div className="search__buttons">
                <Button type="submit" variant="outlined" onClick={search}>Roogle Search</Button>
                <Button variant="outlined">I'm feeling lucky</Button>
            </div>

        </form>
    )
}

export default Search
