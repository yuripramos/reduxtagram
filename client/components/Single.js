import React from 'react';
import Photo from './Photo';

const Single = (props) =>{
  const i = props.posts.findIndex((post) => {
    return (
      post.code === props.params.postId
    )
  });
  const post = props.posts[i];
  console.log(post);
  return (
    <div className="single-photo">
      im the single
    </div>
  )
};

export default Single;
