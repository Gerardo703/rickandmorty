import { useEffect, useState } from 'react';
import { Card } from '../src/Components/Card';
import { Nav } from '../src/Components/Nav';
import { Footer } from '../src/Components/Footer';
import { Pagination } from '../src/Components/Pagination';

function App() {

  //States
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  // URL API
  const url = "https://rickandmortyapi.com/api/character";

  const consultarAPI = (url) => {
    fetch( url )
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch(error => console.log(error))
  }

  const onPrevious = () => {
    consultarAPI(info.prev);
  }

  const onNext = () => {
    consultarAPI(info.next);
  }

  useEffect(() => {
    consultarAPI(url);
  }, []);

  return (
    <>
      <Nav title = 'Rick and Morty App'/>
          <Card characters={characters}/>
        <Pagination 
          prev={info.prev} 
          next={info.next} 
          onPrevious={onPrevious} 
          onNext={onNext}/>
      <Footer title = 'Developed by Gerardo Vega'/>
    </>
  );
}

export default App;
