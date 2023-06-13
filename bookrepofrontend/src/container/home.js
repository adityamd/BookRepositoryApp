import React from 'react';
import axios from 'axios';

import Navbar from './navbar';
import SecondaryNavbar from './secondaryNavbar';
import ThirdNavbar from './thirdNavBar';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            books: []
        }
    }

    componentDidMount(){
        axios.get("http://65.2.4.156/getBooks/")
        .then((res) => {
            res.data['books'].map(
                book => {
                    console.log(book)
                }
            )
            this.setState({
                books: res.data['books']
            })
            this.state.books.map(
                book => {
                    console.log(book)
                }
            )
        })
        .catch(
            (err) => alert(err)
        )
    }

    render(){
        return(
            <>
                <Navbar />
                <SecondaryNavbar />
                <ThirdNavbar currency="$USD" price="0.0" count="0" />
                
            </>
        )
    }
}

export default Home;