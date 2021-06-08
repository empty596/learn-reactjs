import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

Album.propTypes = {
  album: PropTypes.object,
};

Album.defaultProps = {
  album: {},
};

function Album({ album }) {
  console.log(album);
  return (
    <div className='album'>
      <div className='album__thumbnail'>
        <img src={album.thumbnail} alt={album.title} />
      </div>
      <p className='album__name'>{album.title}</p>
    </div>
  );
}

export default Album;
