import React from 'react';
import memeData from "../memeData"

export default function Image(){
    function getMemeImage(){
        const memesArray = memeData.data.memes;
        const randomNumber = Math.floor(Math.random()*memesArray.length)
        let url = memesArray[randomNumber].url
        console.log(url)
    }
    return(
        <div  className='image'>
            <img src='#'/>
        </div>
    )
}