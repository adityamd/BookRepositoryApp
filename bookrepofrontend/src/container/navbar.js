import React from "react";
import './navbar.css';
import {ReactComponent as NavbarHome} from '../assets/navBarHome.svg';
import Text from "../components/text";
import Link from "../components/link";

class Navbar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
                <div class = "navbar">
                    <div class = "navbar-group">
                        <Link href="#"><NavbarHome height="30" width="30" /></Link>
                        <Link href="#" fontSize="22px">Contact</Link>
                        <Link href="#" fontSize="22px">Help</Link>
                    </div>
                    <div class = "navbar-group">
                        <Link href="#" fontSize="22px">Wishlist</Link>
                        <Link href="#" fontSize="22px">My Orders</Link>
                        <Link href="#" fontSize="22px">Sign in/Sign up</Link>
                    </div>
                </div>
            </>
        )
    }
}

export default Navbar;