import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = (props) =>{
  const { postId } = props.params;

  const i = props.posts.findIndex((post) => {
    return (
      post.code === postId
    )
  });
  const post = props.posts[i];
  const postComments = props.comments[postId] || [];
  return (
    <div className="single-photo">
      <Photo i={i} keyId={i} post={post} {...props} />
      <Comments postComments={postComments}/>
    </div>
  )
};

export default Single;
