import './Navigation.css'

const Navigation = () => {
  return (
    <div className="nav">
      <div className="nav-logo">TARO E-ASSISTANCE</div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li>Guide</li>
        <li className="nav-contact">The Researchers</li>
      </ul> 
    </div>
  )
}

export default Navigation