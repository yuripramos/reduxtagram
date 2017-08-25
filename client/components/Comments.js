import React, { Component } from  'react';


class Comments extends Component {
  constructor(props){
    super(props);
  }

  renderComment(comment, i) {
    console.log(comment);
  }

  render() {
    const firstRender = this.props.postComments.map((comment, i) => {
      return (
        <div className="comment" key={i}>
          <p>
            <strong> {comment.user} </strong>
            {comment.text}
            <button className="remove-comment">&times;</button>
          </p>
        </div>
      );
    });
    return(
      <div className="comment">
        {firstRender}
      </div>
    );
  }
};

export default Comments;
