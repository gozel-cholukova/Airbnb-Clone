import React, { useState } from 'react';
import './Header1.css';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
import Search from './Search';


function Header1() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className='header1'>      
      <div className='header1_midd'>
        <input type="text" placeholder="Search Dates" onClick={() => setShowSearch(!showSearch)}/>

        {showSearch && <Search />}

        <Button onClick={() => setShowSearch(!showSearch)} className='search__button' variant='outlined'>
          <SearchIcon color="secondary"/>
        </Button>        
      </div>      
    </div>
  );
}

export default Header1;
