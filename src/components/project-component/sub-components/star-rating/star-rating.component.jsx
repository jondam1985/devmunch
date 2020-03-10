import React from 'react';

const StarRating = ({score}) => {

  const constructStarComponent = (score) => {

    const starRatingConstructor = (score) => {
      return `visual set of constructed stars from ${score}`
    }

    return (
      <div>
        {starRatingConstructor(score)}
        <span>{score[0]} / {score[1]}</span>
      </div>
    )
  }

  return(
    <>
      {constructStarComponent(score)}
    </>
  )

}

export default StarRating