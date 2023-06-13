import React from "react";

class Text extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            defaultFontSize: "24px"
        }
    }

    render(){
        return(
            <span style = {{color: "#550D0E",  fontSize: this.props.fontSize ? this.props.fontSize : this.state.defaultFontSize, 
            fontWeight: "400", fontFamily: "Source Serif Pro"}}>
                {this.props.children}
            </span>
        )
    }
}

export default Text;