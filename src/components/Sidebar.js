import React from "react"

function Sidebar() {
    return (
        <div id="sidebar-wrapper">
        <div id="sidebar-nav-primary">
           <ul className="sidebar-nav">
              <li> <a href="/">Home</a> </li>
              <li> <a href="/about">About</a> </li>
              <li> <a href="/portfolio">Portfolio</a> </li>
              <li> <a href="https://davesherlock.typeform.com/to/by9Mh4" >Contact</a> </li>
           </ul>
        </div>
        <div id="sidebar-nav-secondary">
           <ul className="sidebar-nav sidebar-bottom">
              <li> <a href="https://ie.linkedin.com/in/davesherlock">LinkedIn</a> </li>
              <li> <a href="https://twitter.com/davesherlock">Twitter</a> </li>
              <li> <a href="https://github.com/davesherlock">Github</a> </li>
              <li> <a href="http://stackoverflow.com/users/613007/user613007">stack overflow</a> </li>
           </ul>
        </div>
     </div>
    )
}

export default Sidebar