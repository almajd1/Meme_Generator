import React from 'react';
import memeData from "../memeData"

export default function Meme(){
    let [meme, setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:"https://i.imgflip.com/1bij.jpg"
    })
    let [allMemeImages, setallMemeImages] = React.useState(memeData)

    function getMemeImage(){
        const memesArray = memeData.data.memes;
        const randomNumber = Math.floor(Math.random()*memesArray.length)
        let url = memesArray[randomNumber].url
        console.log(url)
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
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
            <img src={meme.randomImage} className='image'/>
        </main>
    )
}