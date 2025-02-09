import React, { useState} from 'react';
import "./Search.css";
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Search( { hideButtons = false } ) {

    const [{ }, dispatch] = useStateValue();

    const [input, setInput] = useState("");
    const history = useHistory();

    const search = e => {
        e.preventDefault();
        history.push("/search")

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })



    };


    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon" />
                <input value={input} onChange={e => setInput(e.target.value)}/>
                <MicIcon />
            </div>

            {!hideButtons ? (
                <div className="search__buttons">
                    <Button type="submit" variant="outlined" onClick={search}>Roogle Search</Button>
                    <Button variant="outlined">I'm feeling lucky</Button>
                </div> ) : (
                <div className="search__buttons">
                    <Button className="search__buttonsHidden" type="submit" variant="outlined" onClick={search}>Roogle Search</Button>
                    <Button className="search__buttonsHidden" variant="outlined">I'm feeling lucky</Button>
                </div> )
                
            }

            

        </form>
    )
}

export default Search
