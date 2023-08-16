
import React from 'react';
import loading from "./loading.gif";

 const Spinner =()=>{
  
    return (
      <div>
        <img  className="my-3" src={loading} alt="Loading"></img>
      </div>
    );
  
}
export default Spinner;
