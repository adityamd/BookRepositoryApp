import React from 'react';
import axios from 'axios';

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
                <h1>Bookstore</h1>
                <ul>
                    {
                        this.state.books ? 
                        this.state.books.map( book => 
                            <li>
                                <a href = {`http://65.2.4.156/getBook/${book.name}`} target = '_blank'>
                                    {book.name}
                                </a>
                            </li>
                        )
                        : null
                    }             
                </ul>
            </>
        )
    }
}

export default Home;