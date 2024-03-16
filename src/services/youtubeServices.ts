import React from 'react'
import axios from "../axiosConfig";
import { Results } from '../model/searchModels'

export const searchSong = async (songName : String) => {
    let options = {
        q: 'nuvvu naatho emannavo', shelf: 'song'
    };

    try {
        const response = await axios.post("/search", options = options);
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
}