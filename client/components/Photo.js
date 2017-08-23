import React from 'react';
import Link from 'react-router';

const Photo = (props) => {
  const { post } = props;
  return (
    <figure className="grid-figure">
      <div className="grid-photo-wrap">
        <Link to={`/view/${post.code}`}>
          {post.caption}
        </Link>
      </div>
    </figure>
  )
};


export default Photo;
