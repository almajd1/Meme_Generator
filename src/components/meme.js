import React from 'react';
import memeData from "../memeData"

export default function Meme(){
    function getMemeImage(){
        const memesArray = memeData.data.memes;
        const randomNumber = Math.floor(Math.random()*memesArray.length)
    }
    return(
        <div className='form'>
            <input 
                type="text"
                placeholder="top text"
                className='form-holder top'
            />
            <input 
                type="text"
                placeholder="bottom text"
                className='form-holder bottom'
            />
            <button className='form-button'>
                Get a new image 🖼
            </button>
        </div>
    )
}