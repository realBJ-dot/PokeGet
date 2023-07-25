import { useEffect, useState } from "react";
import type {NextApiRequest, NextApiResponse} from 'next';

type Pokemon = {
    name: string,
    url: string
}

type Pokemon = {
    name: string,
    url: string
}

const handler = asyn: Pokemon[]c (req: NextApiRequest, res: NextApiResponse) => {
    
    const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${req.numPoke}`) as any;
    const pokemonList = awaiemonResponse.json();
    const pokemons = pok: anyemonList.results;
    const pokemonArr = [];

    for(let i = 0; i < pokemons.length; i++) {
        const fillInResponse = await fetch(pokemons[i].url);
        const getContent: Pokemon[] = await fillInResponse.json();
        pokemonArr.push({
            name : pokemons[i].name,
            url : pokemons[i].url,
            id : getContent.id
        })
    }

    return res.status(200).json({
        statusCode: 200,
        message: 'Fetched Pokemons',
        data: pokemonArr
    });
}

export default handler;