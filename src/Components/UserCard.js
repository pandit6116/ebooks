import React from 'react';

function UserCard (props) {
   
    return(
      <>
      
      <div className="card">
      <img src={props.imgsrc} alt="my pic" className="card_img" />
      <div className="card__info">
      <span className="card__title"> {props.title} </span>
      <h3 className="card__title"> {props.sname} </h3>
      <a href={props.link} target="__blank">
      <button> Resume Course </button>
      </a>
      </div>
      </div>
    </>
  
    );
    }
    export default UserCard;