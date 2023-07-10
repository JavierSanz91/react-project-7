import React from "react"
import memesData from "../memesData"

export default function Header() {

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        console.log(url)
    }


    return (
        <main>
            <div>
                <input 
                    type="text" 
                    placeholder="Top text" 
                    className="top" 
                    name="top"
                />

                <input 
                    type="text" 
                    placeholder="Bottom text" 
                    className="bottom" 
                    name="bottom"
                />

                <button 
                    className="button" 
                    onClick={getMemeImage}
                >
                    Get a new meme image  🖼
                </button>
            </div>
        </main>
    )
}