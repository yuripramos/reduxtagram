import React from 'react';
import Photo from './Photo';

const PhotoGrid = React.createClass({
  render() {
    return (
      <div className="photo-grid">
      {this.props.posts.map((item, index) => {
        return (
          <Photo {...this.props} key={index} keyId={index} post={item} />
        )}
      )}
      </div>
    )
  }
});

export default PhotoGrid;
