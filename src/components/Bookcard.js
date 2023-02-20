import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './card.css'
import { Link,useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Bookview from './Bookview';





function Bookcard({book}) {

  const [show,setShow]=useState(false);
  const[bookItem,setItem]=useState()

  console.log(book);
  return (


<>
{
  book.map((item=>{

    let thumbnail=  item.volumeInfo.imageLinks &&item.volumeInfo.imageLinks.smallThumbnail;
    let price= item.saleInfo.listPrice && item.saleInfo.listPrice.amount
    let name=item.volumeInfo.title 

    if(thumbnail!==undefined && price!=undefined){
      return(
        <>

      
      <div class="row" onClick={()=>{setShow(true);setItem(item)}} >
      <div class="column">
        <div class="card">
          <img src={thumbnail} alt=''/>
         <h6>{name}</h6>
        <p className='amount'>&#8377;{price}</p>
        
      </div>
      </div>
      </div>  
      <Bookview show={show} item={bookItem} onClose={()=> setShow(false)} />
     </>
      )
      
      
      
    }
  

  
  }))
}




</>





 


  )
}

export default Bookcard