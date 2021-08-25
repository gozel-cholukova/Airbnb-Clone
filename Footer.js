import React from 'react';
import './Footer.css';
import LanguageIcon from '@material-ui/icons/Language';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
  return (
    <div className="footer">
      <p>&copy; 2021 Airbnb Clone! • Privacy • Terms • Sitemap • Company details</p>

      <p><LanguageIcon fontSize="small" /> English(IN)
         <AttachMoneyIcon fontSize="small"/> USD
         <FacebookIcon  />
         <TwitterIcon />
         <InstagramIcon />
      </p>
    </div>
  )
}

export default Footer;
