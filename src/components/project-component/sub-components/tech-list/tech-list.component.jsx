import React from 'react';

const TechList = ({list}) => {

  return (
    <div>
      {
        list ? 
        list.map((item,index)=>{
          return(
            <div key={index} >{item}</div>
          )
        }) :
        null
      }
    </div>
  )

}

export default TechList