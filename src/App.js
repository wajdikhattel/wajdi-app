import React from 'react';

import Movies from './compontes/Movies';
import Header from './compontes/Header';
import ReactStars from 'react-rating-stars-component';
import {Container,Col ,Row} from "react-bootstrap";


import picture1 from './assets/Popular on Netflix/p1.PNG';
import picture2 from './assets/Popular on Netflix/p2.PNG';
import picture3 from './assets/Popular on Netflix/p3.PNG';
import picture4 from './assets/Popular on Netflix/p4.PNG';
import picture5 from './assets/Popular on Netflix/p5.PNG';
import picture6 from './assets/Popular on Netflix/p6.PNG';
import picture7 from './assets/Popular on Netflix/p7.PNG';
import picture8 from './assets/Popular on Netflix/p8.PNG';
import picture9 from './assets/Popular on Netflix/p9.PNG';
import picture10 from './assets/Popular on Netflix/p10.PNG';
import picture11 from './assets/Popular on Netflix/p11.PNG';
import picture12 from './assets/Popular on Netflix/p12.PNG';
import AddMovie from './compontes/AddMovie';


function App() {

// let name="Wassim"
let movies = [{posterUrl: picture1 ,
  title: 'The Road Trick',
  rate: 4,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut congue metus. ",
  },
  {
    posterUrl: picture2 ,
    title: 'Wynonna Earp',
    
    rate: 5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut congue metus.",
    
  }  ,
  {
    posterUrl: picture3 ,
    title: 'Club De Cuervos',
    
    rate: 4,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut congue metus.",
    
  }]
          
  return (
    <div >
      
      <Header></Header>
      <Container fluid>
  <Row>
    <Col></Col>
  </Row>
</Container>
      {/* <AddMovie></AddMovie>
      <ReactStars></ReactStars>
      <Movies movies={movies} /> */}
      
    </div>
  );
}

export default App;
