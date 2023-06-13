import React from "react";

import Text from "./text";
import "./button.css";

class Button extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <button class="button-class">
                <Text fontSize={this.props.fontSize}>{this.props.children}</Text>
            </button>
        )
    }
}

export default Button;