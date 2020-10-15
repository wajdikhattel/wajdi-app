import React, {useState} from 'react';

import Movies from './Movies';
import Header from './Header';
import ReactStars from 'react-rating-stars-component';
import {Container,Col ,Row, Form, FormControl, Button} from "react-bootstrap";


import picture1 from '../assets/Popular on Netflix/p1.PNG';
import picture2 from '../assets/Popular on Netflix/p2.PNG';
import picture3 from '../assets/Popular on Netflix/p3.PNG';
import picture4 from '../assets/Popular on Netflix/p4.PNG';
import picture5 from '../assets/Popular on Netflix/p5.PNG';
import picture6 from '../assets/Popular on Netflix/p6.PNG';
import picture7 from '../assets/Popular on Netflix/p7.PNG';
import picture8 from '../assets/Popular on Netflix/p8.PNG';
import picture9 from '../assets/Popular on Netflix/p9.PNG';
import picture10 from '../assets/Popular on Netflix/p10.PNG';
import picture11 from '../assets/Popular on Netflix/p11.PNG';
import picture12 from '../assets/Popular on Netflix/p12.PNG';
import AddMovie from './AddMovie';


function Main() {

  

  // let name="Wassim"
  const movies = [{posterUrl: picture1 ,
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
    const [listAllMovies, setAllListMovies] = useState(movies);
    const [listSearchedMovies, setListSearchedMovies] = useState(listAllMovies);

  const onCreate = (movie) => {
    setAllListMovies([...listAllMovies, movie]);
  }

    const onSearch = (type, v) => {
        if (type === 'rate') {
            if (v === 0) {
                setListSearchedMovies(listAllMovies)
            } else {
                const filteredList = listAllMovies.filter(movies => movies[type] >= v)
                setListSearchedMovies(filteredList)
            }
        } else {
            if (v === '') {
                setListSearchedMovies(listAllMovies)
            } else {
                const filteredList = listAllMovies.filter(movies => movies[type].toLowerCase().includes(v.toLowerCase()))
                setListSearchedMovies(filteredList)
            }
        }
    }

          
  return (
    <div >
      
      <Header></Header>
      <Form inline>
      <FormControl type="text" placeholder="Title Search" className="mr-sm-2" onChange={(e) => onSearch('title', e.target.value)} />
      <ReactStars onChange={(e) => onSearch('rate', e)}/>
    </Form>
      <Container fluid>
        <Row>
          <Col></Col>
        </Row>
      </Container>
      <AddMovie onCreateMovie={onCreate}></AddMovie>
      <Movies movies={listSearchedMovies} />
      
    </div>
  );
}

export default Main;
