import React from "react";

function Grid({ characters, handleOnCickEvent }) {
  return (
    <div className="row">
      <div className="col-md-12" id="imageGrid">
        {characters.map((element)=>{
          return (
            <div className="card m-2 imageContainer btn btn-secondary" data-id={element.id} key={element.id}>
              <img tabindex="0" src={element.img} onClick={(event)=>handleOnCickEvent(event)} className="Images" data-id={element.id} key={element.id} alt={element.name} />
            </div>
          )
        })}
      </div>
    </div>
  )
}


export default Grid;