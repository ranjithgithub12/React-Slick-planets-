import './index.css'
import PlanetItem from '../PlanetItem'
import Slider from 'react-slick'


const PlanetsSlider = props => {
  const {planetsList} = props

  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="app-container" data-testid="planets">
      <Slider {...settings}>
        {planetsList.map(eachItem => (
          <PlanetItem planetsList={eachItem} key={eachItem.id} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
