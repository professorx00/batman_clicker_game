import React from "react";


function NavBar({ current, highest, isCorrect }) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <h1 className="navbar-brand mb-0 h1">Batman Clicky Game</h1>
      <h1 className="alert">{isCorrect}</h1>
      <h1 className="navbar-brand mb-0 h1">Score: {current}| Top Score: {highest}</h1>
    </nav>
  )
}

export default NavBar;