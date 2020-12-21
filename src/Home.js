import React from 'react';
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from '@material-ui/icons/Apps';
import Avatar from '@material-ui/core/Avatar';
import Search from "./Search";

function Home() {
    return (
        <div className="home">
            <div className="home__header">
                <div className="home__headerLeft">
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                </div>
                <div className="home__headerRight">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                    <AppsIcon />
                    <Avatar />
                </div>
            </div>

            <div className="home__body">
                <img src="https://lh3.googleusercontent.com/proxy/tjWItoUfX4KuRrScHpJN6B4izcpJHUDURvyMA228Vhc2LbraQnvGNkfvf6qJqjvJw_sbNAcb6y9k8xzG3H_JuPvSPd8p57VPLjPgMtySU-sM0taenK5Exg" alt=""/>
                <div className="home__inputContainer">
                    <Search />
                </div>
            </div >
        </div>
    )
}

export default Home
