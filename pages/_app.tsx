import React, {useEffect, useState} from 'react';
//import {Button} from '@deere/fuel-react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavgBar } from '@/components/NavgBar';
import { PageComponent } from '@/components/Pagination';

function App() {
  const [pokemons, setPokemons] = useState<any[] | []>([]); //first col
  
  
  const numPoke = 100;
  useEffect(()=> {
    const getPokemon = async () => {
      const response = await fetch(`/api/bj/${numPoke}`);
      const data = await response.json();
      setPokemons(data.data);
      

    }

    getPokemon();
  }, []);
  return (
    <div>
      
      <NavgBar/>
      <h1>hhhhhhhhh</h1>
      {pokemons.map(poke=> {
        return (
          poke
        )
      })} 

    </div>
  );
}

export default App;
