import React from 'react';
import memeData from "../memeData"

export default function Meme(){
    let [memeImage, setMemeImage] = React.useState("")

    function getMemeImage(){
        const memesArray = memeData.data.memes;
        const randomNumber = Math.floor(Math.random()*memesArray.length)
        let url = memesArray[randomNumber].url
        console.log(url)
        setMemeImage(url)

    }
    return(
        <main>
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
                <button className='form-button' onClick={getMemeImage}>
                    Get a new image 🖼
                </button>
            </div>
            <img src={memeImage} className='image'/>
        </main>
    )
}