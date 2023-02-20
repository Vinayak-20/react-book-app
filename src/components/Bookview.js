import React from 'react'
// import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './view.css'

function Bookview({show,item,onClose} ) {
  if(!show){
   return  null
  }
  let thumbnail=  item.volumeInfo.imageLinks &&item.volumeInfo.imageLinks.smallThumbnail;

  return (
    <>
  <div className='overlay'>
    <div className='overlay-inner'>

      <button className='close' onClick={onClose}>
        <i class='fas fa-times'></i>
      </button>
      <div className='inner-box'>
        <img className='i' src={thumbnail}></img>
        <div className='info'>
          <h1>{item.volumeInfo.title}</h1>
          <h3>{item.volumeInfo.authors}</h3> <br></br>
          <h4>{item.volumeInfo.publisher} <span>{item.volumeInfo.publishDate}</span></h4><br></br>
          <a href={item.volumeInfo.previewLink} ><button>more</button></a>
        </div>
      </div>
      <h4 className='description'>{item.volumeInfo.description}</h4>
    </div>


  </div>




    </>





  )
}

export default Bookview