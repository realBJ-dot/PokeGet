import { useEffect, useState } from "react";
import type {NextApiRequest, NextApiResponse} from 'next';
import { Sequelize, DataTypes } from 'sequelize';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    console.log('request query', req.query)
    const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${req.query.numPokemon}`) as any;
    const pokemonList = await pokemonResponse.json();
    const pokemons = pokemonList.results;
    const pokemonArr = [];

    // for(let i = 0; i < pokemons.length; i++) {
    //     const fillInResponse: any = await fetch(pokemons[i].url);
    //     const getContent = await fillInResponse.json();
    //     pokemonArr.push({
    //         name : pokemons[i].name,
    //         url : pokemons[i].url,
    //         id : getContent.id
    //     })
    // }

    const sequelize = new Sequelize({
      database: "barneytest",
      username: "barneyjin",
      password: "Jinpy20010817",
      host: "rdsdb-test.c3vg2w4k8zot.us-east-2.rds.amazonaws.com",
      port: 5432,
      dialect: "postgres",
      dialectOptions: {
        ssl: {
          require: true, // This will help you. But you will see nwe error
          rejectUnauthorized: false // This line will fix new error
        }
      },
    });

    //testing the connection
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }


    const { QueryTypes } = require('sequelize');

    //getting the name columns from the pokemon table
    const data = await sequelize.query(`select * from "Pokemons"`, { type: QueryTypes.SELECT });

    for (const i in data) {
      if (data[i]) {
        pokemonArr.push({
          name : data[i].name,
          url : data[i].url,
          id : data[i].id
        })
      }
    }
    console.log(pokemonArr);
    
    
   
    return res.status(200).json({
        statusCode: 200,
        message: 'Fetched Pokemons',
       
        data: pokemonArr
    });
}

export default handler;