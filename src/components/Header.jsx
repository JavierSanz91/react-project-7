import React from "react"
import Troll from "../images/troll.png"

export default function Header() {
    return (
        <nav className="navbar">
                <img className="logo-img" src={Troll} />
                <h2 className="logo-text" >Meme Generator</h2>
            <h4 className="course" >React Course - Project 3</h4>
        </nav>
    )
}