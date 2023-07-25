import { useEffect, useState } from "react";
import type {NextApiRequest, NextApiResponse} from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    console.log('request query', req.query)
    const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${req.query.numPokemon}`) as any;
    const pokemonList = await pokemonResponse.json();
    const pokemons = pokemonList.results;
    const pokemonArr = [];

    for(let i = 0; i < pokemons.length; i++) {
        const fillInResponse: any = await fetch(pokemons[i].url);
        const getContent = await fillInResponse.json();
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