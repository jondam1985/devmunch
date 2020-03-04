import React from 'react';

import StarRating from './sub-components/star-rating/star-rating.component';
import MentorNumbers from './sub-components/mentor-numbers/mentor-numbers.component';
import CommentNumbers from './sub-components/comment-numbers/comment-numbers.component';
import TechList from './sub-components/tech-list/tech-list.component';

const ProjectComponent = ({view_details_link,contact_button_link,technologies,projet_desciprtion,project_title,project_image,star_rating,mentor_numbers,comment_numbers}) => {

  return(
    <div>
      <img alt='project-logo' src={project_image} />
      <StarRating score={star_rating} />
      <MentorNumbers number={mentor_numbers} />
      <CommentNumbers number={comment_numbers} />
      <p>{project_title}</p>
      <p>{projet_desciprtion}</p>
      <TechList list={technologies} />
      <button onClick={` go to ${contact_button_link}`} >Contact</button>
      <a href={view_details_link} >View details</a>
    </div>
  )
}

export default ProjectComponent