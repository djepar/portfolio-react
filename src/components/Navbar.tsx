import React from "react"
import "./components.css"
const Navbar: React.FunctionComponent = () => {
    return (
        <div className="navbar">
        <ul>
            <li><a href="/">Home</a></li>
            
            <li><a href="/project">Project</a></li>
            
            <li><a href="/contact">Contact</a></li>
        </ul>
        </div>
    )
}

export default Navbar