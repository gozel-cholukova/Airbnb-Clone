import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './Banner.css';

function Banner() {
  const history = useHistory();
  return (
    <div className="banner">
      <div className="banner__info">
        <h1>Olympian & Paralympian Online Experiences</h1>

        <Button onClick={() => history.push('/search')}
        variant='outlined'
        color='disabled'>Explore now </Button>
      </div>
    </div>
  )
}

export default Banner;
