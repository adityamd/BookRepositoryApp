import React from "react";

class Input extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div style = {{border: "1px solid #DFD7CC", padding: "5px", backgroundColor: "white"}}>
                <input type={this.props.type} placeholder={this.props.placeholder} onChange={this.props.handleChange} 
                    style = {{ width: this.props.width, border: "0px", height: "100%"}}
                />
                <span style={{float: "right", margin: "0px 5px"}}>{this.props.children}</span>
            </div>
        )
    }
}

export default Input;