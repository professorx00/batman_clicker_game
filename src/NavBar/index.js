import React from "react";


function NavBar({ current, highest, isCorrect,alert }) {
  return (
    <div class="row" id="nav">
      <div className="col-md-4 d-flex align-items-center">
        <img src="favicon.ico" className="icon" /><h3 className="m-3 p-0"> Batman Clicker Game</h3>
      </div>
      <div className="col-md-4 d-flex justify-content-center align-items-center ">
        <h5 className={alert}>{isCorrect}</h5>
      </div>
      <div className="col-md-4 d-flex align-items-center">
        <h3 className="m-0 p-0">Score: {current}| Top Score: {highest}</h3>
      </div>
    </div>
  )
}

export default NavBar;