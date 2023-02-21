
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom'

const Landing = () => {
  return <Wrapper>
    <nav>
      <Logo />
    </nav>
    <div className="container page">
      <div className="info">
        <h1>
          job <span>tracking</span> app
        </h1>
        <p>
        I'm baby chambray fam organic prism pour-over iceland poutine kombucha. Chartreuse four loko whatever put a bird on it, raw denim succulents fashion axe messenger bag chicharrones. Umami gochujang yes plz polaroid, etsy quinoa same franzen stumptown typewriter.
        </p>
        <Link to="/register" className="btn btn-hero">Login/Register</Link>
      </div>
      <img src={main} alt="job hunt" className="img main-img" /> 
    </div>
  </Wrapper>
}



export default Landing
