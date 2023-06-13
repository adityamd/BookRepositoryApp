import React from "react";

import Input from "../components/input";
import Text from "../components/text";
import {ReactComponent as Search} from "../assets/search.svg"
import Button from "../components/button";
import InverseButton from "../components/inversebutton";

class SecondaryNavbar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div style = {{display: "flex", backgroundColor: "#F9F4DB", height: "3rem", padding: "5px 10px"}}>
                <h2 style={{ margin: "auto 4rem", padding: "0px 80px 0px 0px"}}>
                    <Text fontSize="2rem">BookStore</Text>
                </h2>
                <div style={{display:"flex", gap: "50px", margin:"auto"}}>
                    <Input type="text" width="603px">
                        <Search />
                    </Input>
                    <Button fontSize="20px">Search</Button>
                    <InverseButton fontSize="20px" >Advanced Search</InverseButton>
                </div> 
            </div>
        )
    }
}

export default SecondaryNavbar;