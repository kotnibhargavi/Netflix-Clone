import React from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import HeroBanner from "../../assets/hero_banner.jpg"
import HeroTitle from "../../assets/hero_title.png"
import PlayBtn from "../../assets/play_icon.png"
import InfoIcon from "../../assets/info_icon.png"
import TitleCard from '../../components/TitleCards/TitleCard'
import Footer from '../../components/Footer/Footer'


const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src = {HeroBanner} alt = "background_banner" className='banner_img'/>
        <div className="hero-caption">
          <img src = {HeroTitle} alt = "Title" className='caption-img'/>
          <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.</p>
          <div className="hero-btns">
           <button className='btn'><img src = {PlayBtn} alt= "Play-Button"/>Play</button>
            <button className='btn dark-btn'><img src = {InfoIcon} alt= "info-Icon" />More Info</button>
          </div>
          <TitleCard/>
        </div>
      </div>
      <div className="more-cards">
      <TitleCard title= {"Blockbuster Movies"} category={"top_rated"}/>
      <TitleCard title= {"Only on Netflix"} category={"popular"}/>
      <TitleCard title= {"Upcoming"} category={"upcoming"} />
      <TitleCard title= {"Top Pics for You"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
