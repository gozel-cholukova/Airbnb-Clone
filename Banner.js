import { Button } from '@material-ui/core';
import React from 'react';
import './Banner.css';

function Banner() {
  return (
    <div className="banner">
      <div className="banner__info">
        <h1>Olympian & Paralympian Online Experiences</h1>

        <Button
        variant='outlined'
        color='disabled'>Explore now </Button>
      </div>
    </div>
  )
}

export default Banner;
