import './Hero.css'
import arrowbtn from '../../Assets/arrowbtn.png'
import playbtn from '../../Assets/playbtn.png'
import pausebtn from '../../Assets/pausebtn.png'

const Hero = ({heroData,setHeroCount,heroCount,setPlayStatus,playStatus}) => {
  return (
    <div className='hero'>
        <div className="hero-text">
            <p>{heroData.text1}</p>
            <p>{heroData.text2}</p> 
        </div>
        <div className='hero-explore'>
            <p>Explore the Features</p>
            <img className="hero-arrow-img" src={arrowbtn} alt="" />
        </div>
        <div className="hero-dot-play">
          <ul className='hero-dots'>
            <li onClick={()=>setHeroCount(0)} className={heroCount===0?"hero-dot orange":"hero-dot"}></li>
            <li onClick={()=>setHeroCount(1)} className={heroCount===1?"hero-dot orange":"hero-dot"}></li>
            <li onClick={()=>setHeroCount(2)} className={heroCount===2?"hero-dot orange":"hero-dot"}></li>
          </ul>
          <div className="hero-play">
            <img className="hero-vid-play" onClick={()=>setPlayStatus(!playStatus)} src={playStatus?pausebtn:playbtn} alt="" />
            <p>See the video</p>
          </div>
        </div>
    </div>    
  )
}

export default Hero