import { render } from "@testing-library/react";
import React from "react";
import axios from "axios";

class BestBooks extends React.Component{
  const(props);
  this.state = {
    bookData: {}
  }
}

getBooks = async () => {
  try{
    let bookRequest = await axios.get(`${process.env.REACT_APP_SERVER}/books`)
    this.setState ({
      bookData
    })
  }
}

render(){
  return (

  )
}
