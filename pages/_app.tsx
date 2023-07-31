import React, {useEffect, useState} from 'react';
//import {Button} from '@deere/fuel-react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavgBar } from '@/components/NavgBar';
import { PageComponent } from '@/components/Pagination';
import { Pagination } from 'react-bootstrap';

function App() {
  const [pokemons, setPokemons] = useState<any[] | []>([]); //first col

  
  
  
  const numPoke = 100;
  useEffect(()=> {
    const getPokemon = async () => {
      const response = await fetch(`/api/bj/${numPoke}`);
      const data = await response.json();
      //console.log(data.data.map(item=> item.name))
      //const pokenames = data.map(item => item.name);
      setPokemons(data.data);
      

    }

    getPokemon();
  }, []);
  return (
    <div>
      
      <NavgBar/>
      <PageComponent {...pokemons} />

    </div>
  );
}

export default App;
