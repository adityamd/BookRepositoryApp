import React from "react";
import Dropdown from "../components/dropdown";
import Link from "../components/link";
import Text from "../components/text";
import {ReactComponent as Cart} from "../assets/cart.svg"

class ThirdNavbar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div style = {{display: "flex",justifyContent: "space-between"}}>
                <div style={{display:"flex", gap: "1rem", margin: "auto 4rem 4rem", padding: "10px 0px"}}>
                    <Dropdown options={["Shop By Category","Romance","Action","Comedy","Sci-Fi","Thriller"]}/>
                    <Link href="#" fontSize="18px">Coming Soon</Link>
                </div>
                <div style={{display:"flex", gap: "1rem", margin: "auto 0rem 4rem", padding: "10px 0px"}}>
                    <Dropdown options={["English","Spanish","Hindi","French","Japanese","German"]}/>
                    <Dropdown options={["$USD","EUR","INR","RUB","YEN","ZAR"]}/>
                    <div style={{display: "flex",backgroundColor:"#F9F4DB", 
                     justifyContent: "space-between",padding: "5px 10px", width: "15rem"}}>
                        <div style = {{display:"flex", gap: "5px"}}>
                            <Text fontSize="22px">{this.props.currency}</Text>
                            <Text fontSize="22px">{this.props.price}</Text>
                        </div>
                        <div style = {{display:"flex", gap: "20px"}}>
                            <Text fontSize="22px">{this.props.count}</Text>
                            <Cart />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ThirdNavbar;