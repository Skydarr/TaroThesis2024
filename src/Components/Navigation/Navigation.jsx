import './Navigation.css'

const Navigation = () => {
  return (
    <div className='nav'>
      <div classname="nav-logo">TARO</div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>Explore</li>
        <li>Study</li>
        <li classname='nav-contact'>The Researchers</li>
      </ul>
    </div>
  )
}

export default Navigation