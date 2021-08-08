import React from 'react';
import Banner from './Banner';
import './Home.css';
import Card from './Card';

function Home() {
  return (
    <div className='home'>
      <Banner />

      <h1>Live anywhere</h1>

      <div className="home__section">
        <Card 
          src="https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=720"        
          title="Outdoor getaways"
        />
        <Card 
          src="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=720"        
          title="Unique stays"
        />
        <Card 
          src="https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=720"        
          title="Entire homes"
        />
        <Card 
          src="https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=720"        
          title="Pets allowed"
        />        
      </div>

      <h1>Discover things to do</h1>
      <div className="home__section">
      <Card 
          src="https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=720"        
          title="Experiences"
          description="Find unforgettable activities near you."
        />
        <Card 
          src="https://a0.muscache.com/im/pictures/a6b08861-feb8-4a01-a76d-b33d2867b441.jpg?im_w=720"        
          title="Online Experiences"
          description="Live, interactive activities led by Hosts."
        />
        <Card 
          src="https://a0.muscache.com/im/pictures/247a1ea3-946d-4eb8-a6ab-e8b9a66846f4.jpg?im_w=720"        
          title="Featured collection: Wanderlust"
          description="Travel from home with Online Experiences."
        />
        
      </div>
    </div>
  )
}

export default Home
