import React from 'react';
import './SearchResult.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarIcon from '@material-ui/icons/Star';

function SearchResult({img, location, title, description, star, price, total}) {
  return (
    <div className="searchResult">
      <img src={img} alt=""/>
      <FavoriteIcon className="searchResult__heart" />

      <div className="searchResult__info">
        <div className="searchResult__infoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>____</p>
          <p>{description}</p>
        </div>
  
        
        <div className="searchResult__infoBottom">
          <div className="searchResult__star">
            <StarIcon className="searchResult__start" />
            <p><strong>{star}</strong></p>
          </div>
          <div className="price">
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>       
    </div>
  )
}

export default SearchResult;
