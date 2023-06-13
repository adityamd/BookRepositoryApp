import React from "react";

import Text from "./text";

class Dropdown extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
                <select style={{border: "0px",color: "#550D0E",  fontSize: "18px", 
                                fontWeight: "400", fontFamily: "Source Serif Pro"}}>
                    {
                        this.props.options.map(
                            opt => 
                                <option>{opt}</option>                            
                        )
                    }
                </select>
            </>
        )
    }
}

export default Dropdown;