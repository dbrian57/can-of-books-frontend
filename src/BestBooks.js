import React from 'react';
import axios from 'axios';
// import Carousel from 'react-bootstrap/Carousel';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      books: [],
    });
  }


  /* TODO: Make a GET request to your API to fetch books for the logged in user  */
  getBooks = async () => {
    try{
      let bookRequest = await axios.get(`${process.env.REACT_APP_SERVER}/books`)
      this.setState({
        books: bookRequest.data
      })
    } catch(error){
      console.log('error message', error.response.data)
    }
  } 

  render() {

    /* TODO: render user's books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <p>Book Carousel coming soon</p>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;