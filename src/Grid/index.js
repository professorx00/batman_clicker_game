import React from "react";

function Grid({ characters, handleOnCickEvent }) {
  return (
    <div className="row">
      <div className="col-md-10 offset-md-1" id="imageGrid">
        {characters.map((element)=>{
          return (
            <div className="m-1 p-0 imageContainer center" data-id={element.id} key={element.id}>
              <img tabIndex="0" src={element.img} onClick={(event)=>handleOnCickEvent(event)} className="Images btn btn-secondary" data-id={element.id} key={element.id} alt={element.name} />
            </div>
          )
        })}
      </div>
    </div>
  )
}


export default Grid;