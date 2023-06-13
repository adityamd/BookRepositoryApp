import React from "react";

import Text from "./text";

class Link extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
                <a href = {this.props.href} style={{textDecoration:"none"}}>
                    <Text fontSize={this.props.fontSize}>{this.props.children}</Text>
                </a>
            </>
        )
    }
}

export default Link;