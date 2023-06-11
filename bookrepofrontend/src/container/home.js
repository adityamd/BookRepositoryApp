import React from 'react';
import axios from 'axios';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            books: []
        }
        this.getBook = this.getBook.bind(this);
    }

    componentDidMount(){
        axios.get("http://localhost:8000/getBooks/")
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

    getBook(book){
        console.log(book)
        axios.get(`http://localhost:8000/getBook/${book}`)
        .then((data) => {
            console.log(data)
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
                                <a href = {`http://localhost:8000/getBook/${book.name}`} target = '_blank'>
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