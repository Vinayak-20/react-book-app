import React from 'react'
import Bookcard from './Bookcard'
import './Main.css'
// import Row from 'react-bootstrap/Row';
import axios from 'axios'
import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom'


function Main() {

  const [search, setSearch] = useState("")
  const [bookData, setData] = useState([]);

  const searchBook = (evt) => {
    if (evt.key == "Enter") {

      axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyDUiCv_z6vJUGjkClpOuvYLxjk3NgwB2uw ' + '&maxResults=40')
        .then(res => setData(res.data.items)).catch(err => console.log(err))

    }

  }


  return (
    <div>
      <div className='main'>
        <div className='name'>     <h1>So many books,So little time </h1></div>


        <div className='search'>
          <input type='text' placeholder='Find your favourite books'
            value={search} onChange={event => setSearch(event.target.value)}
            onKeyPress={searchBook}
          />

          <button
            className='sr' id='button'  ><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>

      </div>
      <div className='contain'>
        {
          <Bookcard book={bookData} />
        }
      </div>












    </div>
  )
}

export default Main